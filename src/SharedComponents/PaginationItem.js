
import { Component } from "react"

export class PaginationItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item 
        };
    }

    render(){
        return(
            <>
                <div className="card myCard">
                {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div className="card-body">
                        <img className="card-img-top" src="/assets/images/catPicTemp.jpeg" alt="Card cap"></img>
                        <h4 className="cnterTextAlign">{this.state.item.name}</h4>
                        <div className="card-text cnterTextAlign">
                        {this.state.item.description}
                        </div>
                        <div className="row">
                            <div className="col">{this.state.item.tradePrice}</div>
                            <div className="col rightTextAlign">{this.state.item.salesPrice}</div>
                        </div>
                        <div className="row">
                            <button>ADD ITEM</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}