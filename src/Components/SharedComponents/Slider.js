import { Component  } from "react";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export class Slider extends Component {
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
      <div className="container-lg position-relative p-0">
      <Carousel 
      animationHandler="fade" showThumbs={false} showStatus={false} showArrows={false} selectedItem={this.state.currentSlide} onChange={this.updateCurrentSlide} showIndicators={false} autoPlay={this.state.autoPlay} interval={3000} infiniteLoop={true} stopOnHover={false}>
          {this.state.items
            .filter((item) => item.imageBody !== "")
            .map((item) => (
              <div className="w-100" key={item.sliderId}>
              <img style={{ width: '100%' , aspectRatio: '3/1'}} src={"data:image/png;base64, " + item.imageBody}  alt={"Slide" + item.sliderId}/>
          </div>
            ))}
        </Carousel>
        <div class="w-100 d-flex justify-content-around position-absolute bottom-0 start-0" style={{ marginBottom: '2px'}}>
        {this.state.items.filter((item) => item.imageBody !== "").map((item, index) => 
          <>
          <div className="text-break text-justify text-white text-center cursorpointer py-3 w-100 d-none d-xl-block mt-0 position-relative" style={{marginLeft: '1px' , marginRight: '1px', fontSize: '1rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
          <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoXl f_OpenSans_Bold" : "f_OpenSans_Bold"}>{item.link}</div>
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer py-1 w-100 d-none d-lg-block d-xl-none position-relative" style={{marginLeft: '1px' , marginRight: '1px', fontSize: '1rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
        <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoLg f_OpenSans_Bold" : "f_OpenSans_Bold"}>{item.link}</div>
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer w-100 d-none d-md-block d-lg-none position-relative" style={{ marginLeft: '1px' , marginRight: '1px' , fontSize: '0.95rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
        <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoMd f_OpenSans_Bold" : "f_OpenSans_Bold"}>{item.link}</div>
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer w-100 d-block d-md-none position-relative" style={{ marginLeft: '1px' , marginRight: '1px' , fontSize: '0.8rem', backgroundColor: index === this.state.currentSlide ? '#3594cc' : '#26ae5d'}} onClick={() => this.clickSlide(index)} >
        <div style={{ textTransform: 'uppercase' }} className={index === this.state.currentSlide ? "ddtaBV cylPcoSm f_OpenSans_Bold" : "f_OpenSans_Bold"}>{item.link}</div>
        </div>
        </>
        )}
        </div>
      </div>
      </>
    );
  }
}
