import React, { Component } from 'react'
import './MegaMenu.css';
import { TopBar } from './TopBar';
import axios from 'axios';
import { MenuColumn } from './MenuColumn';

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
                    <TopBar />
                </div>
                <div className = "row">
                    <div className = "col right-border">
                      <MenuColumn items={this.state.items}/>
                    </div>
                    <div className = "col right-border">
                      <MenuColumn/>
                    </div>
                    <div className = "col right-border">
                      <MenuColumn />
                    </div>
                    <div className = "col">
                      <MenuColumn />
                    </div>
                </div>
            </div>
        )
    }
}