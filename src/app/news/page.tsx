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
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import styles from "../../styles/news.module.css"
import firebase_app from '@/firebase/config'
import "./news.css"
interface Message {
  id: string
  text: string
  createdAt: string
}
const News = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loadIndex, setLoadIndex] = useState(1)
  const [isEmpty, setIsEmpty] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
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
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
        createdAt: dayjs(doc.data().createdAt.toDate()).format('YYYY/MM/DD'),
      }))

      setMessages(data)
    })

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
  
  console.log(filteredMessages);

  const handleTabClick = (index: any ) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.news_page}>
      <div className={styles.title}>
        <h2 className={styles.news_title}>News</h2>
      </div>
      <div className={styles.news}>
        <Tabs>
          <TabList className={styles.news_TabList}>
          <Tab onClick={() => handleTabClick(0)} 
          className={activeTab === 0 ? styles.active : styles.news_tab}>
            NEWS
          </Tab>
          <Tab onClick={() => handleTabClick(1)} 
          className={activeTab === 1 ? styles.active : styles.news_tab}>
            this month's NEWS
          </Tab>
          <Tab onClick={() => handleTabClick(2)} 
          className={activeTab === 2 ? styles.active : styles.news_tab}>
            all NEWS
          </Tab>
          </TabList>
          <TabPanel>
            {messages.map((post) => (
              <div key={post.id} className={styles.TabPanel}>
                <p className={styles.news_time}>{post.createdAt}</p>

                <a className={styles.news_text1} target="_blank" rel="noopener">
                  {post.text}
                  
                </a>
              </div>
            ))}
          </TabPanel>
          
          <TabPanel>
            <div className="news-tabs">
              {filteredMessages.map((post) => (
                <div key={post.id} className={styles.TabPanel}>
                  <p className={styles.news_time}>{post.createdAt}</p>

                  <a className={styles.news_text1}>{post.text}</a>
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
      </div>
    </div>
  )
}

export default News
