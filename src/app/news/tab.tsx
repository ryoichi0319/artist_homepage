// /* eslint-disable import/order */
// 'use client'

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
// import { db } from '@/firebase/client'
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
// } from 'firebase/firestore'
// import { useEffect, useState } from 'react'
// import dayjs from 'dayjs'
// interface Message {
//   id: string
//   text: string
//   createdAt: string
// }

// const News = () => {
//   const [messages, setMessages] = useState<Message[]>([])

//   useEffect(() => {
//     const messagesCollection = collection(db, 'messages')
//     const q = query(messagesCollection, orderBy('createdAt'), limit(50))
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         text: doc.data().text,
//         createdAt: dayjs(doc.data().createdAt.toDate()).format('YYYY/MM/DD'),
//       }))

//       setMessages(data)
//     })

//     // コンポーネントがアンマウントされたときに監視を解除
//     return () => unsubscribe()
//   }, [])

//   const message = messages.filter((fil) => fil.createdAt === '2023/01/01')
//   console.log(message)

//   return (
//     <div>
//       <div className="News">
//         <Tabs>
//           <TabList className="news-tabList">
//             <Tab className="news-tab1">
//               <p className="news-tab">お知らせ</p>
//             </Tab>
//             <Tab className="news-tab1">
//               <p className="news-tab">お知らせ</p>
//             </Tab>
//             <Tab className="news-tab1">
//               <p className="news-tab">お知らせ</p>
//             </Tab>
//           </TabList>
//           <TabPanel className="my-tab-panel">
//             <div className="news-tabs">
//               {messages.map((post) => (
//                 <div key={post.id} className="news-map">
//                   <p className="news-flex-date1">{post.createdAt}</p>

//                   <a className="news-flex-text1" target="_blank" rel="noopener">
//                     {post.text}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <div className="news-tabs">
//               {message.map((post) => (
//                 <div key={post.id} className="news-map">
//                   <p className="news-flex-date1">{post.createdAt}</p>

//                   <a className="news-flex-text1">{post.text}</a>
//                 </div>
//               ))}
//             </div>
//           </TabPanel>
//           <TabPanel></TabPanel>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

// export default News
