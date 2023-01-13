import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Slide } from "react-slideshow-image";
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import ItemCard from '../SharedComponents/ItemCard';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { json } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faAngleLeft,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import authHeader from '../../Services/auth-header';
import InfiniteScroll from "react-infinite-scroll-component";
import { SliderThumb } from '@mui/material';
import { useNavigate } from "react-router-dom";


function ReOrderButton(props){
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  return(
    <div to="" className="py-1 px-2 me-3 f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap" style={{ border: '1px solid #00796B' , color: '#00796B' }} onClick={() => 
      {                      
         if(!loading){
           setloading(true);
           axios
         .post("https://api.caspianpizza.ir/api/Order/ReCreateOrder/" + props.itemId , null,{ headers: authHeader() })
         .then((response) => {
           setloading(false);
           navigate("/Basket");
         })
         .catch((error) => {alert(error);setloading(false);});
         }
     }}>
       {!loading && (<span className="f_OpenSans_Bold">Re Order Now</span>)}
     {loading && (<FontAwesomeIcon style={{ color: '#00796B' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}
       </div>
  )

}

function OrdersTable(props){
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);  
  const [page, setpage] = useState(3);
  


  useEffect(() => {
    axios.get('https://api.caspianpizza.ir/api/Order/GetByOrderStatus?OrderState=' + props.orderState + '&StartDate=2000/12/13&EndDate=2023/01/08&SearchKey&Page=1&PageSize=10', { headers: authHeader() })
    .then((response) => {
      setItems(items.concat(response.data.data));
      if(response.data.meta.totalRows === response.data.data.length){
        sethasMore(false);
      }
    })
    .catch((error) => {});
  }, []);


  return(
    
  <InfiniteScroll
            className="pb-5"
            dataLength={items.length}
            next={() => {
              axios.get('https://api.caspianpizza.ir/api/Order/GetByOrderStatus?OrderState=' + props.orderState + '&StartDate=2000/12/13&EndDate=2023/01/08&SearchKey&Page=' + page + '&PageSize=5', { headers: authHeader() })
              .then((response) => {
                setpage(page+1);
                setItems(items.concat(response.data.data));
                if(response.data.meta.totalRows === items.length){
                  sethasMore(false);
                }
              })
              .catch((error) => {});
              }
            }
            hasMore={hasMore}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
              <table className="table px-3 py-2 noselect" style={{ borderCollapse: 'separate' , borderSpacing: '0 8px' , backgroundColor: '#F5F5F5' }}>
  <thead className='bg-white'>
    <tr class="thead-light">
      <th className='f_Poppins text-center' scope="col">Order Id</th>
      <th className='f_Poppins text-center' scope="col">Payment Id</th>
      <th className='f_Poppins text-center' scope="col">Date</th>
      <th className='f_Poppins text-center' scope="col">Total Price</th>
      <th className='f_Poppins text-center' scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {items.map((item) => (
        <tr className='bg-white'>
              <td className='text-center'>{item.id}</td>
              <td className='text-center'>{item.paymentId}</td>
              <td></td>
              <td className='text-center'>£{item.totalPice}</td>
              <td className='text-center'><div className=''>
                <ReOrderButton itemId={item.id}/>
              {/* <Link to="" className="f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap" style={{  color: '#FF9800' }}>View Details {" >"}</Link> */}
              </div></td>
            </tr>
            ))}
            </tbody>
</table>
        </InfiniteScroll>
  )
}

export class Orders extends Component {
    
    state = {
        items: []
      };
    

    render(){
        return(
        <div className="container px-0">
        <div className="text-center py-2 mb-0 align-items-center" style={{ backgroundColor: '#2196F3' }}>
            <h3 className="f_Poppins text-white mb-0">My Orders</h3>
        </div>

        <Tabs className="noselect mt-1">
    <TabList style={{ border: '0 0 0 1px solid' , borderColor: '#FF5722' }}>
      <Tab style={{ backgroundColor: '#FFEB3B' }}>In Process Orders</Tab>
      <Tab style={{ backgroundColor: '#00796B' , color: 'white' }}>Delivered Orders</Tab>
      <Tab style={{ backgroundColor: '#FF5722' , color: 'white' }}>Cancelled Orders</Tab>
    </TabList>

    <TabPanel>
          <OrdersTable orderState={0}/>
    </TabPanel>
    <TabPanel>
    <OrdersTable orderState={2}/>
    </TabPanel>
    <TabPanel>
    <OrdersTable orderState={1}/>
    </TabPanel>

  </Tabs>

        
        </div>
    
      );
    }
    

}

// <div className="d-flex align-items-center px-2">
        
// <Carousel
// additionalTransfrom={0}
// arrows
// autoPlaySpeed={3000}
// centerMode={false}
// className="mt-1 text-center"
// containerClass="container"
// dotListClass=""
// draggable ={false}
// focusOnSelect={false}
// infinite={false}
// partialVisible
// itemClass=""
// keyBoardControl
// minimumTouchDrag={80}
// pauseOnHover
// renderArrowsWhenDisabled={false}
// renderButtonGroupOutside={false}
// renderDotsOutside={false}
// customLeftArrow={<CustomLeftArrow />}
// responsive={{
// cards_7: {
// breakpoint: {
// max: 3000,
// min: 2500
// },
// items: 10,
// partialVisibilityGutter: 40
// },
// cards_6: {
// breakpoint: {
//   max: 2500,
//   min: 2000
// },
// items: +9,
// partialVisibilityGutter: 40
// },
// cards_5: {
// breakpoint: {
//   max: 2000,
//   min: 1500
// },
// items: 5,
// partialVisibilityGutter: 40
// },
// cards_4: {
// breakpoint: {
//   max: 1500,
//   min: 1000
// },
// items: 4,
// partialVisibilityGutter: 40
// },
// cards_3: {
// breakpoint: {
//   max: 1000,
//   min: 500
// },
// items: 3,
// partialVisibilityGutter: 40
// },
// cards_2: {
// breakpoint: {
//   max: 500,
//   min: 0
// },
// items: 2,
// partialVisibilityGutter: 40
// },
// }}
// rewind={false}
// rewindWithAnimation={false}
// rtl={false}
// shouldResetAutoplay
// showDots={false}
// sliderClass=""
// slidesToSlide={2}
// swipeable
// >

// {this.state.items.map((item) => (
// <div>
// <div className="hoverableCard px-2"  style={{border: '0.5px solid #e0e0e0'}}>
//          <ItemCard item={item} kry={item.id}/>
//         </div>
// </div>
//         ))}

// </Carousel>

// </div>