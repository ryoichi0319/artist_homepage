"use client"

import { Tab,Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { db } from '@/firebase';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styles from "./news.module.css"
import { Button } from '@mui/material';

interface Message {
    id: string;
    text: string;
    createdAt: string;
  }

const News = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadIndex, setLoadIndex] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const displayMore = () => {
    if (loadIndex > messages.length) {
      setIsEmpty(true);
    } else {
      setLoadIndex(loadIndex + 1);
    }
  };



  useEffect(()=>{
    db.collection("messages").orderBy("createdAt","desc").limit(50)
    .onSnapshot((snapshot)=>{
      const data = snapshot.docs.map((doc,index)=>({
        
        id: doc.id,
        text: doc.data().text,
        createdAt: dayjs(doc.data().createdAt.toDate()).format('YYYY/MM/DD'),
        
        }))
      
      setMessages(data);
      
    })
  },[])
  
  const message = messages.filter((fil)=> fil.createdAt === "2023/01/01")
console.log(message)


   
  
    
           
    
  return ( 
    <div>
       <div className={styles.title}>
        <h1>News</h1>
       </div>
    <div className={styles.news}>
      <Tabs>
            <TabList className={styles.news_TabList} >
                <Tab className={styles.news_Tab}><p>お知らせ</p></Tab>
                <Tab className={styles.news_Tab}><p>お知らせ</p></Tab>
                <Tab className={styles.news_Tab}><p>お知らせ</p></Tab>
            </TabList>
            <TabPanel >  
                {messages.map((post)=>(
                      <div  key={post.id} className={styles.TabPanel}>
                        
                        <p className={styles.news_time}>{post.createdAt}</p>
                        

                        <a className={styles.news_text1} target="_blank" rel="noopener">{post.text}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</a>
                        </div>
                      
                  ))}
            </TabPanel>
            <TabPanel>
            <div className='news-tabs'>
            {messages.map((post)=>(
                 
                      <div  key={post.id} className='news-map' >
                        
                        <p className='news-flex-date1'>{post.createdAt}</p>
                        

                        <a className='news-flex-text1'>{post.text}</a>
                        </div>
                 

                      
                  ))}
                  </div>
              
            </TabPanel>
            <TabPanel>
              {messages.slice(0,loadIndex).map((post:any)=>(
                <div  key={post.id} className={styles.TabPanel}>
                        
                <p className={styles.news_time}>{post.createdAt}</p>
                

                <a className={styles.news_text1} target="_blank" rel="noopener">{post.text}</a>
                
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