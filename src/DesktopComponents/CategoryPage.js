import { Component } from "react"
import { CategoryPagination } from "../SharedComponents/CategoryPagination"

export class CategoryPage extends Component {
    render(){
        return(
            <CategoryPagination  
            currentCategotyId={this.props.currentCategotyId }
            currentCategotyPage = {this.props.currentCategotyPage }
            hasMore = {this.props.categotyHasMore } 
            items = { this.props.categotyItems }
            fetchMoreCategoryData = {this.props.fetchMoreCategoryData}/>
        )
    }
}