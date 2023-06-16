import { Sidebar } from '@/components/sidebar';
import styles from './styles.module.css';
import { SidebarRigth } from '@/components/sidebarRight';
import Body from '@/components/body';
import { Tweet } from '@/components/homeComponents/tweet';
import { Posts } from '@/components/homeComponents/posts';
import { HomeHeader } from '@/components/homeComponents/homeHeader';

export default function Home() {
  return (
    <>
    <Body Header={<HomeHeader/>} Tweet={<Tweet/>} Posts={<Posts/>}/>
    </>
  );
}
