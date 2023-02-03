import { Component } from "react"
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import ItemCard from "./ItemCard";
import { useState, useEffect,    } from "react";
import { useDispatch } from "react-redux";



class Slider extends Component {
    state = {
      items: [],
      currentSlide: 0,
      autoPlay: true
    };
  
        updateCurrentSlide = (index) => {
          this.setState({
            currentSlide: index
          });
        };
  
        clickSlide = (index) => {
          this.setState({
            currentSlide: index,
            autoPlay: false
          });
        };
  
    componentDidMount() {
      axios
        .get("https://api.caspianpizza.ir/api/Slider?page=1&PageSize=20")
        .then((response) => {
          this.setState({
            items: response.data.data,
          });
        })
        .catch((error) => {});
    }
  
  
    render() {
      if (this.state.items.length === 0) {
        return null;
      }
      return (
        <div className="position-relative p-0 px-xl-5">
        <Carousel className="cursorpointer"
        animationHandler="fade" showThumbs={false} showStatus={false} showArrows={false} selectedItem={this.state.currentSlide} onChange={this.updateCurrentSlide} showIndicators={false} autoPlay={this.state.autoPlay} interval={3000} infiniteLoop={true} stopOnHover={false}>
            {this.state.items
              .filter((item) => item.imageBody !== "")
              .map((item) => (
                <div className="w-100" key={item.sliderId}>
                <img  style={{ width: '100%' , aspectRatio: '3/1'}} src={"data:image/png;base64, " + item.imageBody}  alt={"Slide" + item.sliderId}/>
            </div>
              ))}
          </Carousel>
          <div class="w-100 d-flex justify-content-around position-absolute bottom-0 start-0 px-xl-5" style={{ marginBottom: '2px'}}>
          {this.state.items.filter((item) => item.imageBody !== "").map((item, index) => 
            <>
            <div className="cursorpointer py-2 w-100 d-none d-xl-block mt-0 position-relative" style={{marginLeft: '1px' , marginRight: '1px', fontSize: '1rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
            <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoXl d-flex h-100 align-items-center text-center" : "h-100 d-flex align-items-center text-center"}><span className="text-justify text-white f_OpenSans_Bold w-100 px-0">{item.title}</span></div>
          </div>
          <div className="cursorpointer py-2 w-100 d-none d-lg-block d-xl-none position-relative" style={{marginLeft: '1px' , marginRight: '1px', fontSize: '1rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
          <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoLg d-flex h-100 align-items-center text-center" : "h-100 d-flex align-items-center text-center"}><span className="text-justify text-white f_OpenSans_Bold w-100 px-0">{item.title}</span></div>
          </div>
          <div className="cursorpointer py-2 w-100 d-none d-md-block d-lg-none position-relative" style={{ marginLeft: '1px' , marginRight: '1px' , fontSize: '0.95rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
          <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoMd h-100 d-flex align-items-center text-center" : "h-100 d-flex align-items-center text-center"}><span style={{ fontSize: '0.9em' }}className="text-justify text-white f_OpenSans_Bold w-100 px-0">{item.title}</span></div>
          </div>
          <div className="cursorpointer py-0 w-100 d-none d-sm-block d-md-none position-relative" style={{ marginLeft: '1px' , marginRight: '1px' , fontSize: '0.8rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
          <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoSm h-100 d-flex align-items-center text-center" : "h-100 d-flex align-items-center text-center"}><span style={{ fontSize: '0.9em' }} className="text-justify text-white f_OpenSans_Bold w-100 px-0">{item.title}</span></div>
          </div>
          <div className="cursorpointer py-0 w-100 d-block d-sm-none position-relative" style={{ marginLeft: '1px' , marginRight: '1px' , fontSize: '0.8rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
          <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoXs h-100 d-flex align-items-center text-center" : "h-100 d-flex align-items-center text-center"}><span style={{ fontSize: '0.75em' }} className="text-justify text-white f_OpenSans_Bold w-100 px-0">{item.title}</span></div>
          </div>
          </>
          )}
          </div>
        </div>
      );
    }
  }

  const SpecialGrid = () => {
    return(
        <div className="d-flex p-0 px-xl-5 mt-5">
            <div className="w-50 me-3">
            <img
            className="w-100  cursorpointer"
                style={{  aspectRatio: '1/1'}}
                src="/assets/images/k21mjejgf3e8unerg2ym.jpg"
                alt=""
                ></img> 
            </div>
            <div className="w-50 d-flex">
              <div className="w-50 pe-2">
              <img
                className="w-100 mb-3 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/gprdiyfw6soge8py9ahb.jpg"
                alt=""
                ></img> 
                <img
                  className="w-100 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/e0csazmhssvehxkdufyt.jpg"
                alt=""
                ></img> 
              </div>
              <div className="w-50 text-end ps-2">
              <img
              className="w-100 mb-3 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/wlcwpmvwwbsvgjlv3kke.jpg"
                alt=""
                ></img> 
                   <img
                   className="w-100 cursorpointer"
                style={{  aspectRatio: '1/1'}}
                src="/assets/images/xwepypexozmnrryam6kh.jpg"
                alt=""
                ></img> 
              </div>
            </div>
        </div>
    )
}


const Offers = () => {

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
    .get(
        "https://api.caspianpizza.ir/api/Product/GetProductByCategoryForUser?ProductCategoryId=&HasDiscount=true&SearchKey=&Page=1&SortBy=3&PageSize=4"
    )
    .then((response) => {
      setItems(response.data.products);
    })
  }, []);

  return(
  <>
    <div className="row p-0 px-xl-5 mt-5">
      <div>
      <div className="headersbgimage">
      <div className="headersbgcolor">
      <h1 className="text-center text-white f_OpenSans_Bold f_Poppins py-5 mb-0">Special Offers</h1>
      </div>
    </div>
    <div className="container pt-3">
      <div className="row justify-content-center">
      {items.map((item) => (
 <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 hoverableCard" key={item.id} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'}}>
 <ItemCard item={item} itemId ={item.id} />
</div>
      ))}
      </div>
      <div className="w-100 text-center">
      <div className="mybr-w text-nowrap text-center justify-content-center align-items-center px-5 py-2 my-5 d-inline-block cursorpointer" style={{ border: '1px solid #00796B' , color: '#00796B', height: '40px' }} >
                       <span className="f_Poppins">View more offers</span>
                        </div>
      </div>
    </div>

      </div>
    </div>
    
    </>
  )

}


export class HomePage extends Component {
    render(){
        return(
            <>
            <div className="container-xl">
                <Slider />
                <SpecialGrid />
                <Offers />
            </div>
            </>
        )
    }
}