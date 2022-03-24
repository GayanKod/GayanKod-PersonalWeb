import React, {useState, useEffect} from 'react'
import "./About.scss"
import {motion} from "framer-motion"
import { urlFor, client } from "../../client"
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"
import {images} from "../../constants";


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, []);
  

  return (
    <>
      <table>
        <tr>
          <td>
              <h2 className="head-text">
                Coding <span>+ </span>Coffee 
              </h2>
          </td>
          <td>
              <div className="head-text-coffee-container">
                <img src={images.coffee} alt="coffee" className="head-text-coffee"/>
              </div>
          </td>
        </tr>
      </table>

        <div className="app__profiles">
          {
            abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type:'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            ))
          }
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'), 
  'about', 
  'app__whitebg'
);