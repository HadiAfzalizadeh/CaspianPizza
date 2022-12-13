import { Component } from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";

export class PaginationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    return (
      <>
        <Card>
          <div className="card-body">
            <img
              className="card-img-top"
              src="/assets/images/catPicTemp.jpg"
              alt={this.state.item.name}
            ></img>
            <h4 className="cnterTextAlign">{this.state.item.name}</h4>
            <div className="card-text cnterTextAlign">
              {this.state.item.description}
            </div>
            <div className="row">
              <div className="col">{this.state.item.tradePrice}</div>
              <div className="col rightTextAlign">
                {this.state.item.salesPrice}
              </div>
            </div>
            <div className="row">
              <Button variant="contained">ADD ITEM</Button>
            </div>
          </div>
        </Card>
      </>
    );
  }
}
