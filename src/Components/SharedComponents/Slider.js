import { Component  } from "react";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export class Slider extends Component {
  state = {
    items: [],
    currentSlide: 0,
  };

      updateCurrentSlide = (index) => {
        this.setState({
          currentSlide: index,
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

  setBackgroundColor(index){
    return index === this.state.currentSlide ? {backgroundColor: '#3594cc'} : {backgroundColor: '#26ae5d'};
  }

  render() {
    if (this.state.items.length === 0) {
      return null;
    }
    return (
<>
      <div className="container-lg position-relative p-0">
      <Carousel 
      animationHandler="fade" showThumbs={false} showStatus={false} showArrows={false} selectedItem={this.state.currentSlide} onChange={this.updateCurrentSlide} showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true} stopOnHover={false}>
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
          <div className="text-center">
<FontAwesomeIcon icon={faCaretUp} size="xl" className="align-text-bottom"/>
          <div className="text-break text-justify text-white f_Poppins text-center cursorpointer py-3 w-100 d-none d-xl-block mt-0" style={this.setBackgroundColor(index)} onClick={() => this.updateCurrentSlide(index)} >
          {item.link}
        </div>
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer py-1 w-100 d-none d-lg-block d-xl-none" style={{ marginLeft: '1px' , marginRight: '1px', fontSize: '1rem', backgroundColor: '#26ae5d'}} onClick={() => this.updateCurrentSlide(index)} >
          {item.link}
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer w-100 d-none d-md-block d-lg-none" style={{ marginLeft: '1px' , marginRight: '1px' , backgroundColor: '#26ae5d', fontSize: '0.95rem'}} onClick={() => this.updateCurrentSlide(index)} >
          {item.link}
        </div>
        <div className="text-break text-justify text-white f_Poppins text-center cursorpointer w-100 d-block d-md-none" style={{ marginLeft: '1px' , marginRight: '1px' , backgroundColor: '#26ae5d', fontSize: '0.9rem'}} onClick={() => this.updateCurrentSlide(index)} >
          {item.link}
        </div>
        </>
        )}
        </div>
      </div>
      </>
    );
  }
}
