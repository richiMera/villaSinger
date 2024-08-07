import React from 'react';
import Card from '../../components/Card';
import { useMediaQuery } from '@react-hook/media-query';
import heroImg from '../../assets/hero-img.jpg'
import casaImg from '../../assets/casa-img.png'
import giardinoImg from '../../assets/giardino-img.png'
import Footer from '../../components/Footer';



const cardsData = [
    {
        title: 'La casa',
        chapter: 'Capitolo 1',
        content: 'loremIpsum',
        imageUrl: casaImg,
        routeName: 'lacasa'
    },
    {
        title: 'Il giardino',
        chapter: 'Capitolo 2',
        content: 'loremIpsum',
        imageUrl: giardinoImg,
        routeName: 'lacasa'
    },
    {
        title: 'Ospitalità',
        chapter: 'Capitolo 3',
        content: 'loremIpsum',
        imageUrl: casaImg,
        routeName: 'lacasa'
    },
    {
        title: 'Storie',
        chapter: 'Capitolo 4',
        content: 'loremIpsum',
        imageUrl: giardinoImg,
        routeName: 'lacasa'
    },
    {
        title: 'Il giardino',
        chapter: 'Capitolo 2',
        content: 'loremIpsum',
        imageUrl: casaImg,
        routeName: 'lacasa'
    },
]
const Home: React.FC = () => {


    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{
            padding: isMobile ? '44px 16px' : '76px 0', backgroundColor: '#1D1611', display: 'flex', flexDirection: 'column', alignItems: 'center', height: isMobile ? 'auto' : '100vh', overflow: isMobile ? '' : 'hidden', backgroundImage: `url(${heroImg})`,
            backgroundSize: isMobile ? 'contain' : 'cover',
            backgroundPosition: isMobile ? 'top center' : 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(29, 22, 17, 0.2) 0%, rgba(29, 22, 17, 1) 100%)',
                pointerEvents: 'none'
            }} />
            <h2 style={{ marginBottom: isMobile ? '44px' : '76px', zIndex: 3 }} className='c-primary'>Villa Singer</h2>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '16px' : '40px', width: isMobile ? '100%' : '300%' }}>
                {cardsData?.map((card: any, index: number) => {
                    return (
                        <Card isMobile={isMobile} key={index} data={card} />
                    )
                })}
            </div>
            <Footer isMobile={isMobile} />
        </div>
    );
};

export default Home;










