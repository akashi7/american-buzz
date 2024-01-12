import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from "./navSidebar.module.css";
const NavSideBar = ({ toggle = false, closeSidebar }) => {
    console.log("toggle is", toggle);
    const router=useRouter();
    const pathname=router.pathname;
    const asPath=router.asPath;
    console.log("pathname",pathname,router);
    return (
        <>
            <div
                className={classNames(styles.container, {
                    [`${styles.show}`]: toggle,
                })}
            >
                <div className={classNames(styles.logoContainer)}>
                    <img src="/logo.png"/>
                </div>
                <div className={classNames('col-lg-5',styles.menuContainer)}>
                <section className={classNames(styles.menu,`${pathname=="/"&&styles.active}`)}>
                    <Link href="/">Home</Link>
                </section>
                <section className={classNames(styles.menu,`${asPath=="/#services"&&styles.active}`)}>
                    <Link href="/#services" onClick={() => closeSidebar()}>Services</Link>
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
                 <button onClick={()=>router.push('/contactus')}>Contact Us</button>
            </div>
            </div>
            {toggle && (
                <div
                    className={classNames(styles.navSidebarShadow)}
                    onClick={() => closeSidebar()}
                />
            )}
        </>
    );
};
export default NavSideBar;
