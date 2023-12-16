'use client'

import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
import { useState, ChangeEvent, MouseEvent } from 'react'
import sendMail from '../api/api.js'
import styles from "../../styles/contact.module.css"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [mail, setMail] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    sendMail({
      name,
      company,
      mail,
      title,
      message,
      setName,
      setCompany,
      setMail,
      setTitle,
      setMessage,
    })
  }

  const handleCanceled = () => {
    setName('')
    setCompany('')
    setMail('')
    setMessage('')
    setTitle('')
  }

  const disableSend = name === '' || mail === '' || message === ''

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value)
  }

  const handleMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value)
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.centerColumn}>
      <h2 className={styles.pageTitle}>お問い合わせ</h2>
      <div>
        <p>
          お問い合わせは、以下のフォームから受け付けております。
          <br />
          必須項目が入力されると送信ボタンが点灯します。
        </p>
        <form className={styles.contentsBox}>
          <table className="contact-table">
            <tbody>
              <tr>
                <td className={styles.contact_data}>
                  <label htmlFor="nameForm">氏名</label>
                </td>
                <td className="contact-text">
                  <input
                    type="text"
                    id="nameForm"
                    className={styles.contact_text}
                    value={name}
                    onChange={handleNameChange}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.contact_data}>
                  <label htmlFor="companyNameForm">会社名</label>
                </td>
                <td className="contact-text">
                  <input
                    type="text"
                    id="companyNameForm"
                    className={styles.contact_text}
                    required
                    value={company}
                    onChange={handleCompanyChange}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.contact_data}>
                  <label htmlFor="mailForm">メールアドレス</label>
                </td>
                <td className="contact-text">
                  <input
                    type="email"
                    id="mailForm"
                    className={styles.contact_text}
                    value={mail}
                    onChange={handleMailChange}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.contact_data}>
                  <label htmlFor="mailTitleForm">件名</label>
                </td>
                <td className="contact-text">
                  <input
                    type="text"
                    id="mailTitleForm"
                    className={styles.contact_text}
                    value={title}
                    onChange={handleTitleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="contact-data">
                  <label htmlFor="mailContentForm">お問い合わせ内容</label>
                </td>
                <td className="contact-text">
                  <textarea
                    id="mailContentForm"
                    className={styles.contact_text_area}
                    cols={60}
                    rows={6}
                    value={message}
                    onChange={handleMessageChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btns">
            <div className={styles.contact_send}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleClick}
                disabled={disableSend}
              >
                <strong>お問い合わせを送信する</strong>
              </Button>
            </div>
            <div className={styles.contact_cancel}>
              <Button
                variant="contained"
                onClick={handleCanceled}
                color="error"
                size="small"
              >
                キャンセル
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
