import { Component } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";

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
      <div className="container">
        <Fade {...this.properties}>
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
      </div>
    );
  }
}
