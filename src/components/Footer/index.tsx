import React from 'react';

interface Props {
    isMobile: boolean,
}

const Footer: React.FC<Props> = ({ isMobile }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', color: 'white', padding: '64px 0 80px 0', zIndex: '2' }} >
            <div style={{ marginBottom: isMobile ? '32px' : '8px' }}>
                <p style={{ textAlign: 'center' }}>Piazza Piccoli Martiri, 2 – Milano (MI) {isMobile ? <br /> : <></>} tel. 02 270 02 581 | info@villasinger.it</p>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#F1E4D5' }}>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
};



export default Footer;
