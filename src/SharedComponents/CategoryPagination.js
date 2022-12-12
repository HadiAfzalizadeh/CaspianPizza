import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PaginationItem } from "./PaginationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export class CategoryPagination extends Component {

  render() {
    return (
      <div>
        {
            <InfiniteScroll
            style={{ marginBottom: 20 }}
            dataLength={this.props.items.length}
            next={this.props.fetchMoreCategoryData}
            hasMore={this.props.hasMore}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
            <div className="container-fluid">
                <div className="row">
                {this.props.items.map((item) => (
                    <div className="col-3" key={item.id} style={{ marginBottom: 10}}>
                    <PaginationItem item={item} />
                    </div>
                ))}
                </div>
            </div>
            </InfiniteScroll>
        }
      </div>
    );
  }
}
