import { Button } from '@mantine/core';
import './App.css';
import React from 'react';
import HeaderMegaMenu from './componenets/Header/HeaderMegaMenu';
import SliderCarousel from './componenets/Carousel/Carousel';
import LeadGrid from './componenets/Card/Card';
import FooterLinks from './componenets/Footer/Footer';
import { datajson } from './componenets/Footer/data';

function App() {
  return (
     <div>
     <HeaderMegaMenu/>
     <SliderCarousel/>
     <LeadGrid/>
     <FooterLinks data={datajson.data}/>
     </div>
  );
}

export default App;
