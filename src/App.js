import React from 'react';
import './App.css';
import { Navbar } from './components';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
    return(
        <div className='App'>
            <Navbar />
            <AnimatedRoutes />
        </div>
    ); 
}

export default App;