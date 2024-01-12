import classNames from 'classnames';
import Link from 'next/link';
import styles from './blog.module.css';
import { PostCard } from './subComponents';
const BlogHeader=()=>{
  return (
        <div className={classNames('container-fluid')}>
            <div className={classNames('row',styles.headerContainer)} style={{backgroundImage:"url(/images/construction.jpg)"}}>
               <div className={classNames('col-lg-12',styles.topic)}>
                  <p>Posted on startup</p>
               </div>
               <div className={classNames('col-lg-12',styles.heading)}>
                  <h1>Step-by-step guide to choosing great construction partners</h1>
               </div>
               <div className={classNames('col-lg-12',styles.authorContainer)}>
                  <p>By <span className={classNames(styles.author)}>James West</span><span> |</span>  May 23, 2022 </p>
               </div>
               <div className={classNames('col-lg-12',styles.descriptionContainer)}>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident.</p>
               </div>
               <div className={classNames('col-lg-12',styles.moreContainer)}>
                    <button>
                        <span>Learn more</span>
                        <img src="/union.png" />
                    </button>
               </div>
            </div>
            <div className={classNames('row',styles.fPostSection)}>
                <div className={classNames('col-lg-7 col-md-12',styles.featuredPart)}>
                    <div className='row'>
                        <div className={classNames('col-lg-12 col-md-12',styles.featuredTitle)}>
                            <h1>Featured Post</h1>
                        </div>
                        <div className={classNames('col-lg-12 col-md-12',styles.featuredMedia)}>
                            <div className={classNames(styles.img)} style={{backgroundImage:"url(/images/pimage.jpg)"}}></div>
                        </div>
                        <div className={classNames('col-lg-12 col-md-12',styles.fAuthorContainer)}>
                           <p>By <span className={classNames(styles.author)}>James West</span><span> |</span>  May 23, 2022 </p>
                        </div>
                        <div className={classNames('col-lg-8 col-md-12',styles.fdescription)}>
                           <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                        <div className={classNames('col-lg-12 col-md-12',styles.moreContainer)}>
                            <button className={classNames(styles.fMoreButton)}>
                                <span>Learn more</span>
                                <img src="/union.png" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNames('col-lg-5 col-md-12',styles.allPostPart)}>
                    <div className='row'>
                        <div className={classNames('col-lg-12 col-md-12',styles.allPostHeader)}>
                            <h1>All Post</h1>
                            <span><Link href="#">View All</Link></span>
                        </div>
                        <div className={classNames('col-lg-12 col-md-12',styles.allPostscardHolder)}>
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default BlogHeader