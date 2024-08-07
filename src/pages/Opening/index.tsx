import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Opening: React.FC = () => {

    console.log('entro');
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();
    console.log(isMobile);



    return (
        <div style={{ position: 'relative', height: isMobile ? '100svh' : '100vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }} >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ marginBottom: isMobile ? '' : '57px', textAlign: 'center' }} className='c-primary'>Villa Singer</h1>
                <div style={isMobile ? { position: 'absolute', bottom: '64px', left: '50%', transform: 'translate(-50%)' } : {}}>
                    <Button type={'main'} text='Entra nel sito' onClick={() => { navigate('/villaSinger/home') }} />
                </div>
            </div>
        </div>
    );
};

export default Opening;










