import React from 'react';
import './Page1.css';

import group37 from '../assets/group37.png';
import group35 from '../assets/group35.png';
import group38 from '../assets/group35.png';

const Page1 = () => {
    return (
        <div className='page'>
            <div className='rectangle-1'>
                <div className='rectangle-2'></div>
                <div className='rectangle-3'></div>
                <div className='ellipse-1'></div>
                <div className='ellipse-2'></div>
                <img src={group35} alt='icon' className='group-35' />
                <img src={group38} alt='icon' className='group-38' />
                <img src={group37} alt='icon' className='group-37' />
            </div>
        </div>
    );
}

export default Page1;