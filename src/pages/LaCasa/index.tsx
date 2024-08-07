import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import heroImg from '../../assets/hero-img.jpg'
import casaImg from '../../assets/casa-img.png'
import giardinoImg from '../../assets/giardino-img.png'

import LayoutDetail from '../../components/LayoutDetail';



const pageData = {
    title: 'La casa',
    images: [casaImg, heroImg, giardinoImg]
}
const LaCasa: React.FC = () => {

    console.log('lacasa');


    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <LayoutDetail data={pageData} isMobile={isMobile} />
    );
};

export default LaCasa;










