'use client'
import React, { useEffect, useState } from 'react';
import bg from '@/assets/images/loader.png'

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="preloader" style={{
            display: loading ? '' : 'none',
        }}>
            <div className="preloader__image" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'contain', // Adjust the size here
                backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
                backgroundPosition: 'center', // Centers the image
                width: '50%', // Adjust width
                height: '50%' // Adjust height
            }}></div>
        </div>
    );
};

export default Preloader;
