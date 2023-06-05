import { SidebarElement } from '../sidebarElements'
import styles from './styles.module.css'
import { AiFillHome } from 'react-icons/ai'
import { BiHash } from 'react-icons/bi' 
import { GrNotification } from 'react-icons/gr' 
import { HiOutlineMail } from 'react-icons/hi' 
import { CgProfile } from 'react-icons/cg' 
import Link from 'next/link'
export function Sidebar(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
              <Link href={'/'} legacyBehavior >
                <img src="img/twitter.2.ico" alt="logo do twitter" />
            </Link>
            </div>
            <SidebarElement icon={<AiFillHome/>} text={'home'}/>
            <SidebarElement icon={<BiHash/>} text={'explore'}/>
            <SidebarElement icon={<GrNotification/>} text={'notificações'}/>
            <SidebarElement icon={<HiOutlineMail/>} text={'mensagens'}/>
            <SidebarElement icon={<CgProfile/>} text={'perfil'}/>
            
        </div>
    )
}