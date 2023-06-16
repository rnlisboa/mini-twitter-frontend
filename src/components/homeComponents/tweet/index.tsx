import styles from './styles.module.css'
import { BsImage } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
export function Tweet() {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <div className={styles.avatarImage}>
                    <CgProfile className={styles.avatarIcon} />
                </div>
            </div>
            <div className={styles.bloco}>
                <div className={styles.text}>
                    <textarea name="" id="" placeholder="What is happening?"></textarea>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.image}>
                        <BsImage className={styles.icon} />
                    </div>

                    <button type='submit'>Tweet</button>

                </div>
            </div>
        </div>
    )
}