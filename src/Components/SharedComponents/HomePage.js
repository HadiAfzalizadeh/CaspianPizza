import { Component } from "react"
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';

const SpecialGrid = () => {
    return(
        <div className="d-flex p-0 px-xl-5 mt-5">
            <div className="w-50 me-3">
            <img
            className="w-100  cursorpointer"
                style={{  aspectRatio: '1/1'}}
                src="/assets/images/catPicTemp.jpg"
                alt=""
                ></img> 
            </div>
            <div className="w-50 d-flex">
              <div className="w-50 pe-2">
              <img
                className="w-100 mb-3 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/xwepypexozmnrryam6kh.jpg"
                alt=""
                ></img> 
                <img
                  className="w-100 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/catPicTemp.jpg"
                alt=""
                ></img> 
              </div>
              <div className="w-50 text-end ps-2">
              <img
              className="w-100 mb-3 cursorpointer"
                style={{ aspectRatio: '1/1'}}
                src="/assets/images/catPicTemp.jpg"
                alt=""
                ></img> 
                   <img
                   className="w-100 cursorpointer"
                style={{  aspectRatio: '1/1'}}
                src="/assets/images/catPicTemp.jpg"
                alt=""
                ></img> 
              </div>
            </div>
        </div>
    )
}

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
  <>
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
        </>
      );
    }
  }

export class HomePage extends Component {
    render(){
        return(
            <>
            <div className="container-xl">
                <Slider />
                {/* <SpecialGrid /> */}
            </div>
            </>
        )
    }
}