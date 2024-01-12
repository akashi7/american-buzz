import Head from 'next/head'
import ContactusPage from '../components/common/contactus'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
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
        <ContactusPage/>
       <Footer mTop={false}/>
      </>
    </div>
  )
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
