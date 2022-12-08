import { Component } from 'react'
import { NavigationBar } from './NavigationBar'
import { DrawerLayout } from './DrawerLayout'
import 'reactjs-bottom-navigation/dist/index.css'
import axios from 'axios'

export class MobileApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
      }


    componentDidMount(){
        axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
        .then(response => {
            this.setState({
                items: response.data.data
            })
        })
        .catch(error => {})
    }

    render(){
        if(this.state.items.length === 0){
            return null;
        }
        return(
            <>
                <NavigationBar />
                <DrawerLayout items={this.state.items}/>
            </>
        )
    }
}