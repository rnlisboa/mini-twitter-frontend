import { Sidebar } from '@/components/sidebar';
import styles from './styles.module.css';
import { SidebarRigth } from '@/components/sidebarRight';

export default function Body({Content}:any) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {Content}
      </div>
      <div className={styles.sidebarRight}>
        <SidebarRigth />
      </div>
    </div>
  );
}
