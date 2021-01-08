import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import '../Cards.css';
import CardItem from '../CardItem';
import Car1 from '../../images/car1.jpg';
import Car2 from '../../images/car2.jpg';
import Car3 from '../../images/car3.jpg';
import Car4 from '../../images/car4.jpg';
import Car5 from '../../images/car5.jpg';

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Car1}
              text='APV our best tour car with more comfort'
              label='APV'
              path='/products'
            />
            <CardItem
              src={Car2}
              text='One of our best luxury car for family'
              label='Luxury'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Car3}
              text='There are some important products thath we use in travel'
              label='Products'
              path='/products'
            />
            <CardItem
              src={Car4}
              text='Capture our best moments its impotant to keep good camera'
              label='Camera'
              path='/products'
            />
            <CardItem
              src={Car5}
              text='Its very important to kepp food for good health'
              label='Food'
              path='/products'
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;