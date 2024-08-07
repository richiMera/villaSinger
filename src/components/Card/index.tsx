import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any,
    isMobile: boolean,
}

const Card: React.FC<Props> = ({ data, isMobile }) => {
    const navigate = useNavigate()
    return (
        <div style={{
            backgroundImage: `url(${data?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', overflow: 'hidden', borderRadius: '10px', position: 'relative', width: isMobile ? '100%' : '770px', height: isMobile ? '213px' : '433px'
        }} onClick={() => { navigate('/' + data?.routeName) }} >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 2,
                }}
            />
            <p className='p-small c-primary' style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 3 }}>{data?.chapter}</p>
            <h3 className='c-primary' style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 3 }}>{data?.title}</h3>
        </div>
    );
};



export default Card;
