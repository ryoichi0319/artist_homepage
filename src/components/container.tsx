import styles from "../styles/container.module.css"

interface ContainerProps {
    children: React.ReactNode;
  }

export function Container({ children }: ContainerProps){
    return (
        <div className={styles.default}>
            {children}
        </div>
    )
}