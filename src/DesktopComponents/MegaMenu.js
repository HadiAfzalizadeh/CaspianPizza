import React, { Component } from 'react'
import { MegaMenuTopBar } from './MegaMenuTopBar';
import axios from 'axios';
import { MegaMenuColumn } from './MegaMenuColumn';

export class MegaMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
  }
  
  componentDidMount() {
    axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
      .then(response => {
        this.setState({
          items: response.data.data
        })
      })
      .catch(error => {})
  }

    render(){
      if (this.state.items.length === 0){
          return null;
      }
        return(
            <div className="container" id = "MegaMenu">
                <div className = "row bottom-border" id = "TopBar">
                    <MegaMenuTopBar />
                </div>
                <div className = "row">
                    <div className = "col right-border">
                      <MegaMenuColumn items={this.state.items}/>
                    </div>
                    <div className = "col right-border">
                      <MegaMenuColumn/>
                    </div>
                    <div className = "col right-border">
                      <MegaMenuColumn />
                    </div>
                    <div className = "col">
                      <MegaMenuColumn />
                    </div>
                </div>
            </div>
        )
    }
}