import classNames from 'classnames'
import { useRouter } from 'next/router'
import styles from './footer.module.css'
const Footer = ({ mTop }) => {
  const router = useRouter()
  return (
    <div
      className={classNames(
        `container-fluid ${mTop && 'footerMarginTop'}`,
        styles.container
      )}
    >
      <div className={classNames('row', styles.fsectionI)}>
        <div className={classNames('col-lg-6 col-sm-12')}>
          {/* <img src="/logo.png" /> */}
          <p>
            Partnering with internationally recognized professionals to deliver
            a highest quality product
          </p>
        </div>
        <section className={classNames('col-lg-6 col-sm-12')}>
          <div className={classNames('row', styles.fsectionIRight)}>
            <div className={classNames('col-lg-4 col-sm-12', styles.check)}>
              <div className={classNames(styles.linksHolder)}>
                <section className={classNames(styles.linksHeader)}>
                  <h1>Pages</h1>
                </section>
                <div className={classNames(styles.linksBody)}>
                  <span onClick={() => router.push('/')}>Home</span>
                  <span
                    className={classNames(styles.mt16)}
                    onClick={() => router.push('/about')}
                  >
                    About Us
                  </span>
                  {/* <span className={classNames(styles.mt16)}>Services</span> */}
                  {/* <span className={classNames(styles.mt16)}>Careers</span> */}
                  {/* <span className={classNames(styles.mt16)} onClick={()=>router.push('/blog')}>Blogs</span> */}
                </div>
              </div>
            </div>
            <div className={classNames('col-lg-4 col-sm-12', styles.check)}>
              <div className={classNames(styles.linksHolder)}>
                <div className={classNames(styles.linksBody)}>
                  <span
                    onClick={() => router.push('/#services')}
                    style={{ marginTop: '2.5rem' }}
                  >
                    Services
                  </span>
                  <span
                    onClick={() => router.push('/contactus')}
                    className={classNames(styles.mt16)}
                  >
                    Contact us
                  </span>
                  {/* <span onClick={()=>router.push('/blog')} className={classNames(styles.mt16)}>Newsrooom</span> */}
                </div>
              </div>
            </div>
            {/* <div className={classNames('col-lg-4 col-sm-12')}>
              <div className={classNames(styles.linksHolder)}>
                <section className={classNames(styles.linksHeader)}>
                </section>
                <div className={classNames(styles.linksBody)}>
                  
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <div className={classNames('row', styles.fsectionII)}>
        <div className={classNames('col-lg-12')}>
          <img src='/frame41.png' />
          <img src='/frame42.png' className='ml-10' />
          <img src='/frame43.png' className='ml-10' />
          <img src='/frame44.png' className='ml-10' />
        </div>
      </div>
      <div className={classNames('row', styles.fsectionIII)}>
        <div className={classNames('col-lg-6 col-sm-12')}>
          <span className={classNames(styles.copyRight)}>
            © 2022 AmericanBuzz
          </span>
        </div>
        <div className={classNames('col-lg-6 col-sm-12', styles.termsAndCond)}>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  )
}
export default Footer
