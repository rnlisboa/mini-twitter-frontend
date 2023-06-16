import styles from './styles.module.css'
import Link from 'next/link'


export function HomeHeader(){
    return (
        <div className={styles.container}>
          <div className={styles.header}>home</div>
          <div className={styles.feed}>
            <div className={styles.selectPost} >
                for you
            </div>
            <div className={styles.selectPost}>
                following
            </div>
          </div>
        </div>
    )
}