import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaCodepen } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/gayankodX" target="_blank" rel="noreferrer"><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/gayankod/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
        <div>
            <a href="https://github.com/GayanKod" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
            <a href="https://codepen.io/gayankod" target="_blank" rel="noreferrer"><FaCodepen /></a>
        </div>
        <div>
            <a href="https://facebook.com/gayankod" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        </div>
        <div>
            <a href="https://instagram.com/gayankod" target="_blank" rel="noreferrer"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia