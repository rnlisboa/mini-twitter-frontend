import { Sidebar } from '@/components/sidebar';
import styles from './styles.module.css';
import { SidebarRigth } from '@/components/sidebarRight';

export default function Body({ Header, Tweet, Posts }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.headerMain}>
          {Header}
        </div>
        <div className={styles.tweet}>
          {Tweet}
        </div>
        <div className={styles.posts}>
          {Posts}
        </div>



      </div>
      <div className={styles.sidebarRight}>
        <SidebarRigth />
      </div>
    </div>
  );
}
