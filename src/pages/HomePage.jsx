import React, { Component } from 'react'
import SliderCarousel from '../componenets/Carousel/Carousel';
import LeadGrid from '../componenets/Card/Card';
import FooterLinks from '../componenets/Footer/Footer';
import { datajson } from '../componenets/Footer/data';
export default function HomePage(){
    
    return(
        <div>
        <SliderCarousel/>
     <LeadGrid/>
     <FooterLinks data={datajson.data}/>
        </div>
    );
}