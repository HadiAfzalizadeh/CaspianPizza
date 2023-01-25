import { Component } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";

const indicators = (index) => (
<div className="indicator px-5">{index ===0 && (<p className="mb-0">Offers</p>)}{index ===1 && (<p className="mb-0">New Year</p>)}{index ===2 && (<p className="mb-0">Veganuary</p>)}</div>
);

export class Slider extends Component {
  state = {
    items: [],
  };

  properties = {
    duration: 3000,
    arrows: false,
    pauseOnHover: false,
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
<Fade {...this.properties} indicators={indicators}>
          {this.state.items
            .filter((item) => item.imageBody !== "")
            .map((item) => (
              <img
                key={item.sliderId}
                className="each-slide"
                src={"data:image/png;base64, " + item.imageBody}
                alt={"Slide" + item.sliderId}
              />
            ))}
        </Fade>
    );
  }
}
