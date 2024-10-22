import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar.jsx';
import Home from '../src/Pages/Home/Home.jsx';
import About from '../src/Pages/About/About.jsx';
import Projects from '../src/Pages/Project.jsx';
import Contact from '../src/Pages/ContactUs.jsx';
 import Layout from './Layout/Layout.jsx';
 import Resources from '../src/Pages/Resources/Resource.jsx'
 import ContestPage from './Pages/Contest/Contest.jsx';
 import Club from './Pages/Clubs/Club.jsx';
const App = () => {
    // document.body.classList.add('dark');
    return (
        <>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resource" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/club" element={<Club />} />

            </Routes>
            </Layout>

        </>
    );
};

export default App;
