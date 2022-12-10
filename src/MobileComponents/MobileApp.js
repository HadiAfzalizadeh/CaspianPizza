import { Component } from 'react'
import { NavigationBar } from './NavigationBar'
import { CategoryMenu } from './CategoryMenu'
import 'reactjs-bottom-navigation/dist/index.css'
import axios from 'axios'
import { HomePage } from '../SharedComponents/HomePage'

export class MobileApp extends Component {

    state = {
        CategoryItems: [],
        CurrentPage : ''
    };

    componentDidMount(){
        axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
        .then(response => {
            this.setState({
                CategoryItems: response.data.data
            })
        })
        .catch(error => {})
    }

    selectComponent(){
        switch (this.state.CurrentPage) {
            case 'h':
                return <HomePage />
            case 'b':
                if(this.state.CategoryItems.length === 0){
                    break;
                }
                return <CategoryMenu items={this.state.CategoryItems}/>;
            case 'o':
                return <h1>THis is Offers Page</h1>;
            case 'f':
                return <h1>THis is Favourites Page</h1>;
            case 'r':
                return <h1>THis is Recents Page</h1>;
            default:
                return <HomePage />
        }
    }

    render(){
        return(
            <>
                {this.selectComponent()}
                <NavigationBar />
            </>
        );
    }
}