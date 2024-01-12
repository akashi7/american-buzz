import styles from './subscribe.module.css'
import classNames from 'classnames';
const Subscribe=()=>{
    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.innerContainer)}>
                <section className={classNames(styles.sectionI)}>
                    <p>Subscribe to our newsletter to stay up to date on our latest news.</p>
                    <input type="text" name="message" placeholder='Your email address'/>
                </section>
                <section className={classNames(styles.sectionIII)}>
                    <button>Subscribe</button>
                </section>
            </div>
        </div>
    );
}
export default Subscribe;