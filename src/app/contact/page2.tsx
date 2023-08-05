// "use client"

// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import  sendMail  from "./api.js"
 
// const Contact = () => {
//   const [name, setName] = useState('');
//   const [company, setCompany] = useState('');
//   const [mail, setMail] = useState('');
//   const [title, setTitle] = useState('');
//   const [message, setMessage] = useState('');
  

//   const handleClick = (e) => {
//     e.preventDefault();
//     sendMail({name,company, mail, title, message, setName, setCompany, setMail, setTitle,setMessage });
//   };

//   const handleCanceled = () => {
//     setName('');
//     setCompany('');
//     setMail('');
//     setMessage('');
//     setTitle('');
//   };
  

//   const disableSend = name === '' || mail === '' || message === '';

//   return (
//     <div className="mainContent">
//       <h2 className="pageTitle">お問い合わせ</h2>
//       <div className="contentsBox">
//         <p>お問い合わせは、以下のフォームから受け付けております。</p>

//         <form>
// <table className="contact-table">
//   <tbody>
//     <tr>
//       <td className="contact-data">
//         <label htmlFor="nameForm">氏名</label>
//       </td>
//       <td className="contact-text">
//         <input
//           type="text"
//           id="nameForm"
//           className="form-input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </td>
//     </tr>
//     <tr>
//       <td className="contact-data">
//         <label htmlFor="companyNameForm">会社名</label>
//       </td>
//       <td className="contact-text">
//         <input
//           type="text"
//           id="companyNameForm"
//           className="form-input"
//           required
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//         />
//       </td>
//     </tr>
//     <tr>
//       <td className="contact-data">
//         <label htmlFor="mailForm">メールアドレス</label>
//       </td>
//       <td className="contact-text">
//         <input
//           type="email"
//           id="mailForm"
//           className="form-input"
//           value={mail}
//           onChange={(e) => setMail(e.target.value)}
//         />
//       </td>
//     </tr>
//     <tr>
//       <td className="contact-data">
//         <label htmlFor="mailTitleForm">件名</label>
//       </td>
//       <td className="contact-text">
//         <input
//           type="text"
//           id="mailTitleForm"
//           className="form-input"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </td>
//     </tr>
//     <tr>
//       <td className="contact-data">
//         <label htmlFor="mailContentForm">お問い合わせ内容</label>
//       </td>
//       <td className="contact-text">
//         <textarea
//           id="mailContentForm"
//           className="form-input-text"
//           cols={60}
//           rows={6}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </td>
//     </tr>
//   </tbody>
// </table>
//           <div className="btns">
//             <div className="contact-send">
//               <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick} disabled={disableSend}>
//                 <strong>お問い合わせを送信する</strong>
//               </Button>
//             </div>
//             <div className="contact-canceled">
//               <Button variant="contained" onClick={handleCanceled} color="error" size="small">
//                 キャンセル
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
