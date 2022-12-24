import React, { Component } from 'react'
import SliderCarousel from '../componenets/Carousel/Carousel';
import LeadGrid from '../componenets/Card/Card';
export default function HomePage(){
    return(
        <div>
        <SliderCarousel/>
     <LeadGrid/>
        </div>
    );
}