import Link from "next/link";
import styles from "./logo.module.css"
const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <h2 className={styles.logo}>Acht8</h2>
      </Link>
    </div>
  );
};

export default Logo;