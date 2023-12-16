import Image from 'next/image'
import Link from 'next/link'
import acht8_2 from '../../../public/acht8_2.png'
const Logo: React.FC = () => {
  return (
    <div >
      <Link href="/" >
        <Image
          src={acht8_2}
          alt="バッグ"
          placeholder="blur"
          sizes="100vw"
          style={{
            width: 'auto',
            height: '45px',
          }}
        />
      </Link>
    </div>
  )
}

export default Logo
