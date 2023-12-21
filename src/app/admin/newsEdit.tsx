'use client'
import { Button } from '@mui/material'
import dayjs from 'dayjs'
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
  addDoc,
  deleteDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styles from "../../styles/newEdit.module.css"
import 'react-tabs/style/react-tabs.css'

import firebase_app from '@/firebase/config'
interface Message {
  id: string
  text: string
  createdAt: string
}
const NewsEdit = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loadIndex, setLoadIndex] = useState(1)
  const [isEmpty, setIsEmpty] = useState(false)
  const [editedMessage, setEditedMessage] = useState("");
  const [editingMessageId, setEditingMessageId] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // const [currentPost, setCurrentPost] = useState([])
  const db = getFirestore(firebase_app)
  const displayMore = () => {
    if (loadIndex > messages.length) {
      setIsEmpty(true)
    } else {
      setLoadIndex(loadIndex + 4)
    }
  }

  useEffect(() => {
    const messagesCollection = collection(db, 'messages')
    const q = query(messagesCollection, orderBy('createdAt','desc'), limit(50))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const createdAt = doc.data().createdAt
        ? dayjs(doc.data().createdAt.toDate()).format('YYYY/MM/DD')
        : '';
      return {
        id: doc.id,
        text: doc.data().text,
        createdAt: createdAt,
      };
    });
    setMessages(data);
  });
// コンポーネントがアンマウントされたときに監視を解除
    return () => unsubscribe()
  }, [])
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const startOfMonth = new Date(`${currentYear}/${currentMonth}/01`);

  const filteredMessages = messages.filter((fil) => {
    console.log(fil.createdAt)
    const messageDate = new Date(fil.createdAt);
    return messageDate > startOfMonth;
  });


      //新しいメッセージを作成
  const handleNewMessageSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (newMessage) {
      // Firebase Firestoreを使用して新しいメッセージを追加するロジックを追加
      const messagesCollection = collection(db, 'messages');
      await addDoc(messagesCollection, {
        text: newMessage,
        createdAt:serverTimestamp(),
      });
      // 新しいメッセージを投稿した後、フォームをクリア
      setNewMessage("");
    }
  };

  const handleEditClick = (messageId: string, messageText: string) => {
    setEditingMessageId(messageId); // 型 'string' の値を設定できます
    setEditedMessage(messageText);
  };
  const handleSaveClick = async () => {
    if (editingMessageId && editedMessage) {
      // Firebase Firestoreを使用してメッセージを更新
      const messageRef = doc(db, "messages", editingMessageId);
      await updateDoc(messageRef, {
        text: editedMessage,
      });
  
      // 編集中のメッセージIDと編集テキストをリセット
      setEditingMessageId("");
      setEditedMessage("");
    }
  };
  
  const handleDeleteClick = async (messageId: string) => {
    try {
      // Firebase Firestoreを使用してメッセージを削除
      const messageRef = doc(db, "messages", messageId);
      await deleteDoc(messageRef);
  
      // 削除が成功した場合、メッセージリストから該当のメッセージを削除する
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
    } catch (error) {
      console.error("メッセージの削除中にエラーが発生しました。", error);
    }
  };
  


  return (
    <div className={styles.news_page}>
      <div className={styles.title}>
        <h2 className={styles.news_title}>News</h2>
      </div>
      <div className={styles.news}>
        <Tabs>
          <TabList className={styles.news_TabList}>
            <Tab className={styles.news_Tab1}>
              <p>お知らせ</p>
            </Tab>
            <Tab className={styles.news_Tab}>
              <p>お知らせ2</p>
            </Tab>
            <Tab className={styles.news_Tab}>
              <p>お知らせ3</p>
            </Tab>
          </TabList>
          <TabPanel>
            {messages.map((post) => (
              <div key={post.id} className={styles.TabPanel}>
                <p className={styles.news_time}>{post.createdAt}</p>
                {editingMessageId === post.id ? (
                  // 編集中のUIを表示
                  <div className={styles.news_text1}>
                    <textarea
                      className={styles.editMessageArea}
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)
                      }
                    />
                    <button onClick={handleSaveClick}>保存</button>
                    <button onClick={() => handleDeleteClick(post.id)}>削除</button>

                  </div>
                ) : (
                  // 通常のメッセージを表示
                  <div className={styles.news_text1}>
                    <a  target="_blank" rel="noopener">
                      {post.text}
                    </a>
                    <button onClick={() => handleEditClick(post.id, post.text)}>編集</button>
                    <button onClick={() => handleDeleteClick(post.id)}>削除</button>

                  </div>
                )}
              </div>
              
            ))}
          </TabPanel>
          <TabPanel>
            <div className="news-tabs">
              {filteredMessages.map((post) => (
                <div key={post.id} className="news-map">
                  <p className="news-flex-date1">{post.createdAt}</p>

                  <a className="news-flex-text1">{post.text}</a>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {messages.slice(0, loadIndex).map((post) => (
              <div key={post.id} className={styles.TabPanel}>
                <p className={styles.news_time}>{post.createdAt}</p>

                <a className={styles.news_text1} target="_blank" rel="noopener">
                  {post.text}
                </a>
              </div>
            ))}
            <div className={styles.more_button}>
              <Button
                disabled={isEmpty ? true : false}
                onClick={displayMore}
                variant="contained"
                className={styles.more_button}
              >
                more
              </Button>
            </div>
          </TabPanel>
        </Tabs>
        <form onSubmit={handleNewMessageSubmit}>
  <textarea
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    placeholder="新しいメッセージを入力してください"
    rows={6}
    cols={50}
  />
  <button type="submit">投稿</button>
</form>
        
      </div>
    </div>
  )
}

export default NewsEdit
