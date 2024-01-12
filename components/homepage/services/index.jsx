import classNames from 'classnames'
import styles from './services.module.css'
const Services = () => {
  return (
    <>
      <div
        className={classNames('container-fluid', styles.container)}
        id='services'
      >
        <div className={classNames('row')}>
          <div
            className={classNames('col-lg-6 col-sm-12', styles.titleContainer)}
          >
            <h1>Our Services</h1>
          </div>
          <div className={classNames('col-lg-6 col-sm-12', styles.subTitle)}>
            <p>
              We are a team of Americans born and raised in Africa with a dream
              of developing African continent in different sectors by partnering
              with professionals in different sectors to ensure{' '}
            </p>
          </div>
        </div>
        <div className={classNames('row')}>
          <div
            className={classNames('col-lg-6 col-sm-12', styles.serviceICard)}
          >
            <section className={classNames(styles.card)}>
              <section className={classNames(styles.cardHeader)}>
                <span className={classNames(styles.number)}>01</span>
                <span className={classNames(styles.text)}>Construction</span>
              </section>
              <section className={classNames(styles.cardBody)}>
                <p>
                  We are a team of Americans born and raised in Africa with a
                  dream of developing African continent in different sectors by
                  partnering with professionals in different sectors to ensure{' '}
                </p>
              </section>
            </section>
          </div>
          <div
            className={classNames('col-lg-3 col-sm-12', styles.serviceIICard)}
          >
            <section className={classNames(styles.card)}>
              <section className={classNames(styles.header)}>
                <span className={classNames(styles.number)}>02</span>
                <p className={classNames(styles.headerText)}>IT services</p>
              </section>
              <p className={classNames(styles.text)}>
                IT services refers to the application of business and technical
                expertise to enable organizations in the creation, management
                and optimization of or access to information and business
                processes.
              </p>
            </section>
          </div>
          <div
            className={classNames('col-lg-3 col-sm-12', styles.serviceIICard)}
          >
            <section className={classNames(styles.card)}>
              <section className={classNames(styles.header)}>
                <span className={classNames(styles.number)}>03</span>
                <p className={classNames(styles.headerText)}>Supply</p>
              </section>
              <p className={classNames(styles.text)}>
                we have built an excellent reputation for delivering reliable,
                high quality, performance engineering products and solution.
              </p>
            </section>
          </div>
          {/* <div
                        className={classNames(
                            "col-lg-3 col-sm-12",
                            styles.serviceIIICard
                        )}
                    >
                        <section className={classNames(styles.card)}>
                            <span className={classNames(styles.number)}>
                                03
                            </span>
                            <p className={classNames(styles.text)}>Supply</p>
                        </section>
                    </div> */}
        </div>
        <div className={classNames('row', styles.serviceSectionII)}>
          <section className={classNames(styles.card, styles.firstCard)}>
            <img src='/images/construction.jpg' />
            <section className={classNames(styles.titleContainers)}>
              <span>Building</span>
            </section>
            <button>Learn more</button>
          </section>
          <section className={classNames(styles.card, styles.middleCard)}>
            <img src='/images/pimage.jpg' />
            <section className={classNames(styles.titleContainers)}>
              <span>Apartment</span>
            </section>
            <button>Learn more</button>
          </section>
          <section className={classNames(styles.card, styles.middleCard)}>
            <img src='/images/roads.jpg' />
            <section className={classNames(styles.titleContainers)}>
              <span>Roads</span>
            </section>
            <button>Learn more</button>
          </section>
          <section className={classNames(styles.card, styles.lastCard)}>
            <img src='/images/bridges.jpeg' />
            <section className={classNames(styles.titleContainers)}>
              <span>Bridges</span>
            </section>
            <button>Learn more</button>
          </section>
        </div>
        <div className='row'>
          <div className={classNames('col-lg-12', styles.serviceSectionIII)}>
            <section>
              <h1 className={classNames(styles.heading)}>
                Building the next level infrastructures
              </h1>
              <p className={classNames(styles.subTitle)}>
                We are a team of Americans born and raised in Africa with a
                dream of developing African continent in different sectors by
                partnering with professionals in different sectors to ensure
                that we are delivering products of high quality
              </p>
            </section>
            <img src='/images/rectangle6.png' />
          </div>
        </div>
        <div className='row'>
          <div className={classNames('col-lg-12', styles.serviceSectionIV)}>
            <section>
              <h1 className={classNames(styles.heading)}>
                Helping you to tangle all your IT problems
              </h1>
              <p className={classNames(styles.subTitle)}>
                We are a team of Americans born and raised in Africa with a
                dream of developing African continent in different sectors by
                partnering with professionals in different sectors to ensure
                that we are delivering products of high quality
              </p>
            </section>
            <img src='/images/rectangle7.png' />
          </div>
        </div>
        <div className='row'>
          <div className={classNames('col-lg-12', styles.serviceSectionV)}>
            <section>
              <h1 className={classNames(styles.heading)}>
                Building the next level infrastructures
              </h1>
              <p className={classNames(styles.subTitle)}>
                We are a team of Americans born and raised in Africa with a
                dream of developing African continent in different sectors by
                partnering with professionals in different sectors to ensure
                that we are delivering products of high quality
              </p>
            </section>
            <img src='/images/rectangle8.png' />
          </div>
        </div>
      </div>
    </>
  )
}
export default Services
