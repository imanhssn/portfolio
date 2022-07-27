import React from 'react';
import { Cafebook, Digibank, Dreams, Jadual } from '../pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { About, Features, Header, Skills } from '../containers';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
                    <div className='app__bg'>
                        <Header />
                    </div>
                    <About />
                    <Skills />
                    <Features />
                </motion.div>
            } />
            <Route path='/cafebook' element={ <Cafebook /> } />
            <Route path='/digibank' element={ <Digibank /> } />
            <Route path='/dreams' element={ <Dreams /> } />
            <Route path='/jadual' element={ <Jadual /> } />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes