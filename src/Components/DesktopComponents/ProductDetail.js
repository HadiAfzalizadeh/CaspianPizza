import { Component } from "react";
import { ImageList , ImageListItem , Button , TabList } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export class ProductDetail extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        axios.get("https://api.caspianpizza.ir/api/Product/FindProductById/12")
    .then(response => {
      this.setState({
        item: response.data.data
      });
    })
    .catch(error => {});
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <img
              src="/assets/images/catPicTemp.jpg"
              alt="#rep-itemName"
              style={{ width: "25rem", height: "auto" , marginBottom: '5px'}}
            ></img>
            <ImageList sx={{ width: "25rem", height: 'auto' }} cols={4}>
            {/* {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))} */}
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/assets/images/catPicTemp.jpg"
                        srcSet="/assets/images/catPicTemp.jpg"
                        alt="Temp"
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            
          </div>
          <div className="col">
            <h5>Lorem Ipsum</h5>
            <h1 className="f_SecularOne-Regular">
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC
            </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <p>Collection: £<span>4.36</span> Delivery: £<span>4.68</span></p>
            <p>£4.36 each £4.36 each</p>
            <Button variant="contained" endIcon={<FontAwesomeIcon icon={faCartPlus} />}>
                Add Item
            </Button>
          </div>
        </div>
        <div className="row">
            
        </div>
      </div>
    );
  }
}
