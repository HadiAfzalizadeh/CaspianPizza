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
  faAngleRight
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

  // 212121
function Order(props){
  return(
    <div className='mt-2 rounded' style={{ border: '1px solid #00000033' }}>
      <div className='row p-3 cursorpointer'>
        <div className='d-flex justify-content-between'>
        <div className='d-flex'>
        <FontAwesomeIcon style={{ backgroundColor: '00b7eb ' , borderRadius: '50%' }} icon={faRotate} className='spinner p-1 text-white'/>
        <h6 className='f_Poppins ms-1' style={{ color: '#23254e' }}>In Process</h6>
        </div>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: '#23254e' }} size="xl" className='me-2'/>
        </div>
        
      </div>
      <hr className='mb-0'/>
      <div className='row'>
      <OrderCarousel orderItems={props.items}/>
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
        <div className="text-center py-2 mb-0 align-items-center" style={{ backgroundColor: '#2196F3' }}>
            <h3 className="f_Poppins text-white mb-0">My Orders</h3>
        </div>

        {/* <Tabs className="noselect mt-1">
    <TabList style={{ border: '0 0 0 1px solid' , borderColor: '#FF5722' }}>
      <Tab style={{ backgroundColor: '#FFC107', color: '#212121' }}>In Process Orders</Tab>
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

  </Tabs> */}

  <Order items={this.state.items}/>
        </div>
    
      );
    }
    

}
