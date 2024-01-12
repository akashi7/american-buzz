import Head from 'next/head'
import AboutUs from '../components/aboutus'
import BlogHeader from '../components/blog/header'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import Subscribe from '../components/common/subscribe'
import styles from '../styles/Home.module.css'

export default function Contactus() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AmericanBuz|Contact us</title>
        <meta name="description" content="AmericanBuz blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <> 
       <Navbar/>
       <BlogHeader/>
       <Subscribe/>
       <Footer mTop={true}/>
      </>
    </div>
  )
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
