import { init, send } from '@emailjs/browser'

const sendMail = ({
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
}) => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  if (
    publicKey !== undefined &&
    serviceID !== undefined &&
    templateID !== undefined
  ) {
    init(publicKey)

    const template_param = {
      to_name: name,
      company: company,
      from_email: mail,
      title: title,
      message: message,
    }

    send(serviceID, templateID, template_param)
      .then(() => {
        window.alert('お問い合わせを送信致しました。')
        setName('')
        setCompany('')
        setMail('')
        setMessage('')
        setTitle('')
      })
      .catch((error) => {
        console.error('メール送信エラー:', error)
      })
  } else {
    console.error('環境変数が設定されていません。')
  }
}

export default sendMail
