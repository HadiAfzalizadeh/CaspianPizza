import { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { PaginationItem } from './PaginationItem';


export class CategoryPagination extends Component {

    state = {
        items: [],
        Page: 1,
        countItem: 0
    };

    componentDidMount(){
        axios.get("https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=1&PageSize=9&ProductCategoryId=9")
        .then(response => {
            this.setState({
                items: response.data.data
            });
        })
        .catch(error => {})
    }

    fetchMoreData = () => {
        this.setState({
            Page: this.state.Page+1
        });
        axios.get("https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page="
        +this.state.Page+
        "&PageSize=6&ProductCategoryId=9")
        .then(response => {
            console.log(response.data.data);
            this.setState({
                items: this.state.items.concat(response.data.data)
            })
        })
        .catch(error => {})
    }

    render(){
        return(
            <div>
            <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            >
                <div className='container-fluid'>
                <div className='row'>
                    {this.state.items.map(item => 
                        <div className='col-3'>
                            <PaginationItem  item={item}/>
                        </div>
                    )}
                    </div>
                </div>
                

                    
               
            </InfiniteScroll>
            </div>
        )
    }
}