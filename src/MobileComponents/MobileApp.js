import { Component } from 'react'
import { NavigationBar } from './NavigationBar'
import { CategoryMenu } from './CategoryMenu'
import axios from 'axios'
import { HomePage } from '../SharedComponents/HomePage'
import { DrawerLayout } from './DrawerLayout'
import { Header } from './Header'


export class MobileApp extends Component {

    state = {
        CategoryItems: [],
        CurrentPage : 'h',
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
            default:
                return <HomePage />
        }
    }

    toggleDrawer = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    setCurrentComponent = (component) => {
        this.setState({
            CurrentPage: component
        });
    }

    render(){
        return(
            <>
                <Header />                
                <DrawerLayout isOpen = {this.state.isDrawerOpen} toggleDrawer = {this.toggleDrawer}/>
                {this.selectComponent()}
                <NavigationBar toggleDrawer = {this.toggleDrawer} setCurrentComponent = {this.setCurrentComponent}/>
            </>
        );
    }
}