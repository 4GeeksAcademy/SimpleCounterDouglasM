import React, { useState, useEffect } from 'react';
const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatCounter = (count) => {
        return count.toString().padStart(6, '0');
    };

    return (
        <div>
            <div className='d-flex justify-content-center text-white bg-dark display-1 p-3'>
                <div className='bg-dark'>
                    <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }} >
                        <i class="fas fa-clock"></i>
                    </div>
                </div>
                <div className='border border-1  rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[0]}
                </div>
                <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[1]}
                </div>
                <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[2]}
                </div>
                <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[3]}
                </div>
                <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[4]}
                </div>
                <div className='border border-1 rounded text-center' style={{ width: '100px', height: '100px' }}>
                    {formatCounter(counter)[5]}
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;