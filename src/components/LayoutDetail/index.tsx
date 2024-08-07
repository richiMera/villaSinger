import React, { useState } from 'react';
import crossIcon from '../../assets/open-icon.svg'

interface Props {
    isMobile: boolean,
    data: any,
}

const LayoutDetail: React.FC<Props> = ({ isMobile, data }) => {
    const [open, setOpen] = useState(true);
    return (
        <div style={{ width: '100%', height: isMobile ? '100svh' : '100vh', display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{
                width: '100%',
                height: open ? '50%' : '90%', transition: '0.3s ease-out', position: 'relative', backgroundImage: `url(${data?.images[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='pointer' onClick={() => { setOpen(!open) }} style={{ width: '64px', height: '64px', borderRadius: '50%', position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1d1611', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'all .8s ease-ou' }} src={crossIcon} /></div>
            </div>
            <div style={{ width: '100%', height: open ? '50%' : '10%', transition: '0.3s ease-out', position: 'relative' }}>
            </div>

        </div>
    );
};



export default LayoutDetail;
