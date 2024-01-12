import classNames from 'classnames';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './navbar.module.css';
import NavSideBar from './subComponent/navSidebar';
const Navbar=()=>{
    const router=useRouter();
    const pathname=router.pathname;
    const asPath=router.asPath;
    const [toggle,setToggle]=useState(false);
   return (
    <>
        <div className={`container-fluid`}>
        <div className={classNames('row',styles.container)}>
            <div className={classNames('col-lg-2',styles.logoContainer)}>
                <img src="/logo.png"/>
                <AiOutlineMenu size={20} onClick={()=>setToggle(!toggle)} className={classNames(styles.hamburgerMenu)}/>
            </div>
            <div className={classNames('col-lg-5',styles.menuContainer)}>
                <section className={classNames(styles.menu,`${pathname=="/"&&styles.active}`)}>
                    <Link href="/">Home</Link>
                </section>
                <section className={classNames(styles.menu,`${asPath=="/#services"&&styles.active}`)}>
                    <Link href="/#services">Services</Link>
                </section>
                {/* <section className={classNames(styles.menu,`${pathname=="/blog"&&styles.active}`)}>
                    <Link href="/blog">Blogs</Link>
                </section> */}
                <section className={classNames(styles.menu,`${pathname=="/about"&&styles.active}`)}>
                    <Link href="/about">About Us</Link>
                </section>
            </div>
            <div className={classNames('col-lg-5',styles.rightContainer)}>
                 <section className={classNames(styles.socialIcons)}>
                    <img src="/vector.png"/>
                    <img src="/vector_1.png"/>
                    <img src="/vector_2.png"/>
                 </section>
                 <button type="button" onClick={()=>router.push('/contactus')}>Contact Us</button>
            </div>
        </div>
     </div>
     <NavSideBar toggle={toggle} closeSidebar={()=>setToggle(false)}/>
    </>
   );
}
export default Navbar;