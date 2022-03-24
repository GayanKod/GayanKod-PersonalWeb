import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import {BsMedium} from "react-icons/bs";
import {FaDev} from "react-icons/fa";
import {SiHashnode} from "react-icons/si";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import "./Blog.scss";
import MotionWrap from '../../wrapper/MotionWrap';

const Blog = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y:0, opacity:1 });
  const [blogs, setBlogs] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs"]';
    
    client.fetch(query)
    .then((data) => {
      setBlogs(data);
      setFilterBlog(data);
    })
    
  }, [])
  

  const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{y:100, opacity:0}])

      setTimeout(() => {
        setAnimateCard([ {y:0, opacity: 1} ]);

        if(item === 'All'){
          setFilterBlog(blogs)
        }else{
          setFilterBlog(blogs.filter((work) => work.tags.includes(item)));
        }
      }, 500);
  }

  return (
    <>
      <h2 className="head-text">
        My <span>Articles </span>Section
      </h2>

      <div className="app__blog-filter">
        {['Cyber Security', 'Web Dev', 'Computer Science', 'Design', 'All'].map((item, index) => {
          return(
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__blog-filter-item app__flex p-text ${activeFilter === item? 'item-active' : ''}`}
              >
                {item}
              </div>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className = "app__blog-portfolio" 
      >
        {filterBlog.map((blog, index) => {
          return(
            <div className="app__blog-item app__flex" key={index}>
              <div className="app__blog-img app__flex">
                <img src={urlFor(blog.imgUrl)} alt={blog.name}/>

                <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChilder: 0.5 }}
                  className="app__blog-hover app__flex"
                >
                  <a href={blog.mediumLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1,0.9]}}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                        <BsMedium />
                    </motion.div>
                  </a>

                  <a href={blog.hashnodeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1,0.9]}}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                        <SiHashnode />
                    </motion.div>
                  </a>

                  <a href={blog.devLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1,0.9]}}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                        <FaDev />
                    </motion.div>
                  </a>

                </motion.div>
              </div>

              <div className="app__blog-content app__flex">
                  <h4 className="bold-text">{blog.title}</h4>
                  <p className="p-text" style={{marginTop: 10}}>{blog.description}</p>
              
                  <div className="app__blog-tag app__flex">
                      <p className="p-text">{blog.tags[0]}</p>
                  </div>
              
              </div>

            </div>
          );
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Blog, 'app__blogs'), 
  'blog',
  'app__primarybg'
); 