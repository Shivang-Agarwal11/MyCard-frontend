import React, { Component } from 'react'
import SliderCarousel from '../componenets/Carousel/Carousel';

import FooterLinks from '../componenets/Footer/Footer';
import { datajson } from '../componenets/Footer/data';
import CenterContent from '../componenets/CenterContent/CenterContent';
export default function HomePage(){
    
    return(
        <div>
        <SliderCarousel/>
     <CenterContent/>
     <FooterLinks data={datajson.data}/>
        </div>
    );
}