import Head from 'next/head'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import Subscribe from '../components/common/subscribe'
import Header from '../components/homepage/header'
import Services from '../components/homepage/services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AmericanBuz|HomePage</title>
        <meta name="description" content="american buz homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <> 
       <Navbar/>
       <Header/>
       <Services/>
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
