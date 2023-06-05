import Link from 'next/link'
import styles from './styles.module.css'
export function SidebarElement({icon, text}: any){
    return (
        <Link href={`/${text}`} legacyBehavior>
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
        </Link>
    )
}