import { AnimatePresence,motion } from "framer-motion"
import { usePathname } from 'next/navigation'


export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // 一意のキーを設定するためにラップした画面のパスを取得
  const pathName = usePathname()
  return (
    // アンマウント時の動きをつけるために必要な記述
    <AnimatePresence mode="wait">

　　　　　　　　　　　　//　動きをつけるために必要な記述
　　　　　　　　　　　　//　具体的な動きを記述
　　　　　　　　　　　　//　今回はopacityを使用して　ふわっ　を実現
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }} //　初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 0 }} // アンマウント時
        
        
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
