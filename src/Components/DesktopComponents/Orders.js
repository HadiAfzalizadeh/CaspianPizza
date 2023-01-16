import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Slide } from "react-slideshow-image";
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { render } from '@testing-library/react';
import { Component } from 'react';
import { json } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faRotate,
  faSpinner,
  faAngleRight,
  faCircle,
  faCheck,
  faXmark
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
    <div className="py-1 me-3 f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap d-inline px-5" style={{ border: '1px solid #303F9F' , color: '#303F9F' }} onClick={() => 
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
     {loading && (<FontAwesomeIcon style={{ color: '#303F9F' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}
       </div>
  )

}



function OrdersList(props){
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);  
  const [page, setpage] = useState(3);
  


  useEffect(() => {
    axios.get('https://api.caspianpizza.ir/api/Order/GetByOrderStatus?OrderState=' + props.orderStatus + '&StartDate&EndDate&SearchKey&Page=1&PageSize=10', { headers: authHeader() })
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
              axios.get('https://api.caspianpizza.ir/api/Order/GetByOrderStatus?OrderState=' + props.orderStatus + '&StartDate&EndDate&SearchKey&Page=' + page + '&PageSize=5', { headers: authHeader() })
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
            }>
              <div className='container-fluid'>
              {items.map((item) => (<Order key={item.id} item={item}/>))}
              </div>
            
        </InfiniteScroll>
  )
}

function CancelButton(){
  return(
    <div className="py-1 me-3 f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap d-inline px-5" style={{ border: '1px solid #F44336' , color: '#F44336' }} >
  <span className="f_OpenSans_Bold">Cancel Order</span>
  </div>
  )
}



function ItemCard(props){

    return(
      <>
       <div className="noselect mb-2">
      <div className="row text-center px-2 pt-3 mb-1">
      <div style={{ position: 'relative' }}>
        <img
        style={{ width: '100%' }}
          src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
          alt={props.item.name}
        ></img>    
        </div>
        </div>
        <div className="row text-secondary">
    <div><h4 className="cnterTextAlign text-nowrap" style={{ fontSize: '1rem' }}>{props.item.name}</h4></div>
      </div>
      </div>
        </>
    );
  }

  function OrderCarousel(props){
    return(<div className="d-flex align-items-center px-2">
          
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
    partialVisible
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
    cards_16: {
    breakpoint: {
    max: 3000,
    min: 2350
    },
    items: 16
    },
    cards_15: {
      breakpoint: {
      max: 2350,
      min: 2100
      },
      items: 15
      },
      cards_14: {
        breakpoint: {
        max: 2100,
        min: 1950
        },
        items: 14
        },
        cards_13: {
          breakpoint: {
          max: 1950,
          min: 1800
          },
          items: 13
          },
          cards_12: {
            breakpoint: {
            max: 1800,
            min: 1650
            },
            items: 12
            },
          cards_11: {
            breakpoint: {
            max: 1650,
            min: 1500
            },
            items: 11
            },
            cards_10: {
              breakpoint: {
              max: 1500,
              min: 1350
              },
              items: 10
              },
              cards_9: {
                breakpoint: {
                max: 1350,
                min: 1200
                },
                items: 9
                },
                cards_8: {
                  breakpoint: {
                  max: 1200,
                  min: 1050
                  },
                  items: 8
                  },
                  cards_7: {
                    breakpoint: {
                    max: 1050,
                    min: 900
                    },
                    items: 7
                    },
                    cards_6: {
                      breakpoint: {
                      max: 1050,
                      min: 900
                      },
                      items: 6
                      },
                      cards_5: {
                        breakpoint: {
                        max: 900,
                        min: 750
                        },
                        items: 5
                        },
                        cards_4: {
                          breakpoint: {
                          max: 750,
                          min: 600
                          },
                          items: 4
                          },
                          cards_3: {
                            breakpoint: {
                            max: 600,
                            min: 450
                            },
                            items: 3
                            },
                            cards_2: {
                              breakpoint: {
                              max: 450,
                              min: 300
                              },
                              items: 2
                              },
                              cards_1: {
                                breakpoint: {
                                max: 300,
                                min: 0
                                },
                                items: 1
                                }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={2}
    swipeable
    >
    
    {props.orderItems.map((item) => (
    <div key={item.id}>
    <div className="px-2">
             <ItemCard item={item}/>
            </div>
    </div>
            ))}
    
    </Carousel>
    
    </div>)
  }

/* <tr className='bg-white'>
              <td className='text-center'>{item.id}</td>
              <td className='text-center'>{item.paymentId}</td>
              <td></td>
              <td className='text-center'>£{item.totalPice}</td>
              <td className='text-center'><div className=''>
                <ReOrderButton itemId={item.id}/>*/


function Order(props){
  return(
    <div className='mt-3' style={{ border: '1px solid #00000033' }}>
      <div className='row p-3 cursorpointer'>
        <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
        {props.item.orderState === 0 && (<><FontAwesomeIcon style={{ backgroundColor: '#00b7eb' , borderRadius: '50%' }} icon={faRotate} className='spinner p-1 text-white'/>
        <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>In Process</h6></>)}
        {props.item.orderState === 2 && (<><FontAwesomeIcon style={{ backgroundColor: '#4CAF50 ' , borderRadius: '50%' }} icon={faCheck} className='p-1 text-white'/>
        <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>Delivered</h6></>)}
        {props.item.orderState === 1 && (<><FontAwesomeIcon style={{ backgroundColor: '#FF5722 ' , borderRadius: '50%' , aspectRatio: '1/1'}} icon={faXmark} className='p-1 text-white'/>
        <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>Cancelled</h6></>)}
        </div>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: '#23254e' }} className="me-3" size="sm"/>
        </div>
        <p className='mb-0 mt-3 f_OpenSans_Regular text-secondary mb-3'><span className='p-2'>{props.item.insertTime.substring(0,props.item.insertTime.indexOf( "T" ))} {props.item.insertTime.substring(props.item.insertTime.indexOf( "T" )+1,props.item.insertTime.indexOf( "." ))}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>Order ID </span><span className='me-2'>{props.item.id}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>Payment ID </span><span className='me-2'>{props.item.paymentId}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>Total Price </span><span className='me-2'>£{props.item.totalPice}</span>{props.item.totalPice !== props.item.totalPiceWithoutDiscount && (<><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>Your Profit </span><span className='me-2'>£{props.item.totalPice - props.item.totalPiceWithoutDiscount}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>Total Pice Without Discount </span><span className='me-2'>£{props.item.totalPiceWithoutDiscount}</span></>)}</p>
        <div className='text-end w-100'>
        <ReOrderButton/>
          </div>
      </div>
      <hr className='my-0 '/>
      <div className='row'>
      {/* <OrderCarousel orderItems={props.item}/> */}
      </div>
    </div>
  )
}

export class Orders extends Component {
    
    state = {
        items: []
      };


      componentDidMount() {
        axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + 1 + "&PageSize=" + 50 + "&ProductCategoryId=" +
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
        <div className="container px-0">
        

        <Tabs className="noselect mt-2">
        <div className="text-center ps-4 py-2 mb-0 align-items-center" style={{ backgroundColor: '#673AB7' }}>
            <h4 className="f_Poppins text-white mb-0">My Orders</h4>
        </div>
    <TabList>
      <Tab style={{ backgroundColor: '#00b7eb', color: 'white' }}>In Process Orders</Tab>
      <Tab style={{ backgroundColor: '#4CAF50' , color: 'white' }}>Delivered Orders</Tab>
      <Tab style={{ backgroundColor: '#FF5722' , color: 'white' }}>Cancelled Orders</Tab>
    </TabList>

    <TabPanel>
    <OrdersList orderStatus={0}/>
    </TabPanel>
    <TabPanel>
    <OrdersList orderStatus={2}/>
    </TabPanel>
    <TabPanel>
    <OrdersList orderStatus={1}/>
    </TabPanel>

  </Tabs>
        </div>
    
      );
    }
    

}
