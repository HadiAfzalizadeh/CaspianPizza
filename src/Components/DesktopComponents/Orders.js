import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Slide } from "react-slideshow-image";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ItemCard from '../SharedComponents/ItemCard';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { json } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

export class Orders extends Component {
    
    state = {
        items: []
      };
    
  componentDidMount(){
    axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + 1 + "&PageSize=" + 10 + "&ProductCategoryId=" +
      9
    )
    .then((response) => {
      this.setState({
        items: response.data.data
      });
    })
    .catch((error) => {});
  }


    render(){
        return(
        <div className="container">
        <div className="d-flex justify-content-around headersbgcolor py-2 cursorpointer">
            <h3 className="f_Poppins text-white mb-0">My Active Orders</h3>
            <h3 className="f_Poppins text-white mb-0">My Previous Orders</h3>
        </div>
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className="mt-1 text-center"
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    cards_7: {
      breakpoint: {
        max: 3000,
        min: 2500
      },
      items: 7,
      partialVisibilityGutter: 40
    },
    cards_6: {
        breakpoint: {
          max: 2500,
          min: 2000
        },
        items: 6,
        partialVisibilityGutter: 40
      },
      cards_5: {
        breakpoint: {
          max: 2000,
          min: 1500
        },
        items: 5,
        partialVisibilityGutter: 40
      },
      cards_4: {
        breakpoint: {
          max: 1500,
          min: 1000
        },
        items: 4,
        partialVisibilityGutter: 40
      },
      cards_3: {
        breakpoint: {
          max: 1000,
          min: 500
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      cards_2: {
        breakpoint: {
          max: 500,
          min: 0
        },
        items: 2,
        partialVisibilityGutter: 40
      },
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
{this.state.items.map((item) => (
    <div className="hoverableCard px-2"  style={{border: '0.5px solid #e0e0e0'}}>
                 <ItemCard item={item} kry={item.id}/>
                </div>
                ))}

</Carousel>
        
    
    {/* <Slide slidesToScroll={1} slidesToShow={6} indicators={true}>
                {this.state.items.map((item) => (
                    <ItemCard item={item} kry={item.id}/>
                ))}
                </Slide> */}
    
        <Tabs className="noselect">
        <TabList>
          <Tab style={{ backgroundColor: '#00BCD4' , color: 'black' }}>My Active Orders</Tab>
          <Tab style={{ backgroundColor: '#FF5722' , color: 'black' }}>My Previous Orders</Tab>
        </TabList>
    
        <TabPanel>
        fdsfds
        </TabPanel>
        <TabPanel>
        dfdsf
        </TabPanel>
    
      </Tabs>
        </div>
    
      );
    }
    

}
