import classNames from "classnames";
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import styles from "./header.module.css";
const Header = () => {
   const [sliderRef] =useKeenSlider({
         mode: "free-snap",
         slides: {
            perView: 3,
            spacing: 15,
            loop:true
          },
          loop:true
       },
       [
         (slider) => {
           let timeout
           let mouseOver = false
           function clearNextTimeout() {
             clearTimeout(timeout)
           }
           function nextTimeout() {
             clearTimeout(timeout)
             if (mouseOver) return
             timeout = setTimeout(() => {
               slider.next()
             }, 2000)
           }
           slider.on("created", () => {
             slider.container.addEventListener("mouseover", () => {
               mouseOver = true
               clearNextTimeout()
             })
             slider.container.addEventListener("mouseout", () => {
               mouseOver = false
               nextTimeout()
             })
             nextTimeout()
           })
           slider.on("dragStarted", clearNextTimeout)
           slider.on("animationEnded", nextTimeout)
           slider.on("updated", nextTimeout)
         },
       ]
    )
    return (
        <>
            <div className={classNames("container-fluid", styles.container)}>
                <div className={classNames("row")}>
                    <div
                        className={classNames(
                            "col-lg-6 col-md-12 col-sm-12",
                            styles.leftSection
                        )}
                    >
                        <h1>
                            Partnerning with proffessional for better quality
                        </h1>
                        <button>
                            <span>Learn more</span>
                            <img src="/union.png" alt="union"/>
                        </button>
                    </div>
                    <div
                        className={classNames(
                            "col-lg-6 col-md-12 col-sm-12",
                            styles.rightSection
                        )}
                    >
                        <img src="/vector_3.png" alt="icon"/>
                        <p>
                            We are a team of Americans born and raised in <br />
                            Africa with a dream of developing African continent
                            in different sectors by partnering with
                            professionals in different sectors to ensure that we
                            are delivering
                            <br /> products of high quality
                        </p>
                    </div>
                </div>
            </div>
            <div ref={sliderRef} className={classNames('container-fluid keen-slider',styles.slideContainer)}>
               <section className={classNames('keen-slider__slide',styles.fullImage)}>
                  <img src="/images/bridges.jpeg" alt="bg"/>
               </section>
               <section className={classNames('keen-slider__slide',styles.fullImage)}>
               <img src="/images/construction.jpg" alt="bg" />
               </section>
               <section className={classNames('keen-slider__slide',styles.fullImage)}>
               <img src="/images/img1.png" alt="bg"/> 
               </section>
               <section className={classNames('keen-slider__slide',styles.fullImage)}>
               <img src="/images/img2.png" alt="bg"/>
               </section>
            </div>
            <div className={classNames('container-fluid',styles.sectionOne)}>
                <img src="/images/mask-group.png" alt="bg"/>
                <p className={classNames(styles.p1)}>we are a team of Americans born and raised in Africa with a dream 
                   of developing African continent in different sectors by partnering with
                   professionals in different sectors to ensure that we are delivering 
                   products of high quality</p>
                   <p className={classNames(styles.p2)}>
                    There are many opportunities that are inaccessible lack
                    of modern technology. Americanbuz main goal is to facilitate business to business,
                    business to individuals and individuals to business operate and increase their revenue through
                    a digital market place. Beside private sector, we also help public sector throughout the
                    continent build digital infrastructure that will allow them compete in this era of globalization. 
                    Our supply chain management team also ensures that
                    public and private sectors are supplied with offices and household equipment hassles free.
                   </p>
                
            </div>
            <div className={classNames('container-fluid')}>
              <div className={classNames('row',styles.sectionTwo)}>
                <div className={classNames('col-lg-6 col-sm-12',styles.leftPart)}>
                  <div className="row">
                    <div className={classNames('col-lg-12 col-sm-12',styles.leftPartCard)}>
                      <section className={classNames(styles.imgCard)}></section>
                      <section className={classNames(styles.imgCard)}></section>
                    </div>
                    <div className={classNames('col-lg-12 col-sm-12',styles.leftPartCardTwo)}>
                      <section className={classNames(styles.imgCard)}></section>
                      <section className={classNames(styles.imgCard)}></section>
                    </div>
                  </div>
                </div>
                <div className={classNames('col-lg-6 col-sm-12',styles.rightPart)}>
                  <h1>Make most of work seamslessly with us</h1>
                  <p>We are a team of Americans born and raised in Africa with
                     a dream of developing African continent in different sectors by
                      partnering with professionals
                     in different sectors to ensure that we are delivering products of high quality</p>
                     <button>Learn more</button>
                </div>
              </div>
            </div>
        </>
    );
};
export default Header;
