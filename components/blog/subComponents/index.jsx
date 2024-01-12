import classNames from 'classnames';
import styles from './post.module.css';
export const PostCard=()=>{
   return (
      <div className={classNames(styles.postContainer)} style={{backgroundImage:`url('/images/construction.jpg')`}}>
        <section className={classNames(styles.postHeader)}>
            <p>By <span className={classNames(styles.author)}>James West</span><span> |</span>  Aug 23, 2021  </p>
        </section>
        <section className={classNames(styles.postBody)}>
            <p>8 Figma design systems that you can download for free today.</p>
        </section>
      </div>
   );
}