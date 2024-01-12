import classNames from 'classnames'
import styles from './aboutus.module.css'
const AboutUs = () => {
  return (
    <>
      <div className={classNames('container-fluid', styles.container)}>
        <div className='row'>
          <div className={classNames('col-lg-12', styles.headerContainer)}>
            <h1>
              We're on a quest to restore Africa's <span>greatness!</span>
            </h1>
            <p>
              Our company’s vison is to use our expertise and experience to
              ensure that the African continent physical and digital
              infrastructure is of high quality in today’s modern world.
            </p>
          </div>
        </div>
        <div className={classNames('row', styles.missionContainer)}>
          <div className={classNames('col-lg-6', styles.leftPart)}>
            <img src='/images/rectangle10.png' />
          </div>
          <div className={classNames('col-lg-6', styles.rightPart)}>
            <h1>Our story</h1>
            <p>
              {' '}
              Most of us leaving in diaspora are always investing in their
              countries of our origins and there has always been a need to work
              with those countries in developing countries so that their
              infrastructures and technologies are of international standard. We
              are a team of Americans born and raised in Africa with a dream of
              developing African continent in different sectors by partnering
              with professionals in different sectors to ensure that we are
              delivering products of high quality
            </p>
          </div>
        </div>
        <div className={classNames('row', styles.aboutUsContainer)}>
          <div className={classNames('col-lg-12', styles.header)}>
            <h1>About us</h1>
          </div>
          <div className={classNames('col-lg-6', styles.leftPart)}>
            <p>
              {' '}
              We are part of the diaspora community in USA with a goal to
              facilitate our fellow citizens of the world all of the planet,
              access and live high standard life. We are specialized in
              remodeling infrastructure including buildings, roads, information
              technology and supply management. Whether is building one store or
              fifty stores building our team will execute the work and deliver a
              high quality in a timely and professional manner. Our IT
              professionals are known for developing different type of software
              applications and offer training to the end-users ensuring that the
              software program is user friendly.{' '}
            </p>
          </div>
          <div className={classNames('col-lg-6', styles.rightPart)}>
            <p>
              {' '}
              There are many opportunities that are inaccessible lack of modern
              technology. Americanbuz main goal is to facilitate business to
              business, business to individuals and individuals to business
              operate and increase their revenue through a digital market place.
              Beside private sector, we also help public sector throughout the
              continent build digital infrastructure that will allow them
              compete in this era of globalization. Our supply chain management
              team also ensures that public and private sectors are supplied
              with offices and household equipment hassles free.
            </p>
          </div>
        </div>

        <div className={classNames('row', styles.missionContainer)}>
          <div className={classNames('col-lg-6', styles.leftPart)}>
            <img src='/images/mask-group.png' />
          </div>
          <div className={classNames('col-lg-6', styles.rightPart)}>
            <h1>Our mission</h1>
            <p>
              Our goal is to offer an opportunity to private and public sectors
              throughout the continent take the advantage of our expertise in
              different sectors to ensure that their digital and physical
              infrastructures are of the high quality and ready in today’s
              world.
            </p>
          </div>
        </div>
        <div className={classNames('row')}>
          <div className={classNames('col-lg-12', styles.valuesContainer)}>
            <h1>Our values</h1>
            <p>
              {' '}
              Our goal is to offer an opportunity to private and public sectors
              throughout the continent take the advantage of our expertise in
              different sectors to ensure that their digital and physical
              infrastructures are of the high quality and ready in today’s
              world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutUs
