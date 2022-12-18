import { Component } from 'react'
import { NavigationBar } from './NavigationBar'
import { CategoryMenu } from './CategoryMenu'
import axios from 'axios'
import { HomePage } from '../SharedComponents/HomePage'
import { DrawerLayout } from './DrawerLayout'
import { Header } from './Header'
import { CategoryPagination } from '../SharedComponents/CategoryPagination' 
import { BrowserRouter , Routes , Route } from 'react-router-dom'

export class MobileApp extends Component {

    state = {
        currentMainPage: "",
        currentCategotyPage: 3,
        CategoryItems: [],
        categotyHasMore: true,
        CurrentPage : 'h',
        isDrawerOpen: false,
        currentCategotyId: -1,
        categotyItems: []
    };

    fetchMoreCategoryData = () => {
        this.setState({
          currentCategotyPage: this.state.currentCategotyPage + 1,
        });
        axios
          .get(
            "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" +
            this.state.currentCategotyPage +
              "&PageSize=4&ProductCategoryId=" +
              this.state.currentCategotyId
          )
          .then((response) => {
            this.setState({
              categotyItems: this.state.categotyItems.concat(response.data.data),
            });
            if(response.data.meta.totalRows === this.state.categotyItems.length){
                this.setState({
                  categotyHasMore: false
                });
            }
          })
          .catch((error) => {});
      }

    componentDidMount(){
        axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
        .then(response => {
            this.setState({
                CategoryItems: response.data.data
            })
        })
        .catch(error => {})
    }

    setCurrentCategoryId = (categotyId) => {
        this.setState({
            currentCategotyId: categotyId,
            CurrentPage: 'c'
        });
        axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=1&PageSize=8&ProductCategoryId=" +
      categotyId
    )
    .then((response) => {
      this.setState({
        categotyItems: response.data.data,
        currentCategotyPage: 3,
        categotyHasMore: true
      });
      if(response.data.meta.totalRows === this.state.categotyItems.length){
          this.setState({
            categotyHasMore: false
          });
      }
    })
    .catch((error) => {});
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
                <div style={{ marginTop: '3.3rem' , marginBottom: '3.3rem' }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route index element={<HomePage />}></Route>
                                <Route path="CategoryMenu" element={<CategoryMenu items={this.state.CategoryItems} setCurrentCategoryId = {this.setCurrentCategoryId}/>}></Route>
                                <Route path="CategoryPagination" element={<CategoryPagination currentMainPage={this.state.currentMainPage} 
                                currentCategotyId={this.state.currentCategotyId}
                                currentCategotyPage = {this.state.currentCategotyPage}
                                hasMore = {this.state.categotyHasMore} 
                                items = { this.state.categotyItems}
                                fetchMoreCategoryData = {this.fetchMoreCategoryData}/>}></Route>
                            </Route>
                        </Routes>
                        <NavigationBar toggleDrawer = {this.toggleDrawer} setCurrentComponent = {this.setCurrentComponent}/>
                    </BrowserRouter>
                </div>
                <DrawerLayout isOpen = {this.state.isDrawerOpen} toggleDrawer = {this.toggleDrawer}/>                
            </>
        )
    }
}