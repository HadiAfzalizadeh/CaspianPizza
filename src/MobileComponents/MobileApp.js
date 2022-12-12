import { Component } from 'react'
import { NavigationBar } from './NavigationBar'
import { CategoryMenu } from './CategoryMenu'
import axios from 'axios'
import { HomePage } from '../SharedComponents/HomePage'
import { DrawerLayout } from './DrawerLayout'


export class MobileApp extends Component {

    state = {
        CategoryItems: [],
        CurrentPage : '',
        isDrawerOpen: false
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

    toggleDrawer = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    render(){
        return(
            <>
                <DrawerLayout isOpen = {this.state.isDrawerOpen} toggleDrawer = {this.toggleDrawer}/>
                {this.selectComponent()}
                <NavigationBar toggleDrawer = {this.toggleDrawer}/>
            </>
        );
    }
}