import styles from './styles.module.css'

import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
export function Posts() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.avatarImage}>
          <CgProfile className={styles.avatarIcon} />
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <span className={styles.name}>TNTSportsBrasil</span>
          <span className={styles.nickname}>@TNTSportsBrasil - 3h</span>
        </div>
        <div className={styles.body}>
          <div className={styles.text}>Existem diferentes formas de ver ambas saídas... 👀 E aí, qual a opinião de vocês?</div>
          <div className={styles.image}>
            <img src="https://twitter.com/TNTSportsBR/status/1667131930943299585/photo/1" alt="" />
          </div>
          </div>

      </div>
    </div>
  )
}