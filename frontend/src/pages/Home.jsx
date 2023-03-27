import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import About from '../container/About/About.jsx'
import Contact from '../container/Contact/Contact.jsx'
import Header from '../container/Header/Header'
import Skills from '../container/Skills/Skills'
import Testimonials from '../container/Testimonial/Testimonials'
import Work from '../container/Work/Work'
import Blog from '../container/Blog/Blog.jsx';

function Home() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Blog />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home