
import { Component } from "react"

export class PaginationItem extends Component {
    render(){
        return(
            <>
                <div className="card myCard">
                {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div className="card-body">
                        <img className="card-img-top" src="..." alt="Card cap"></img>
                        <h4 className="cnterTextAlign">Title</h4>
                        <div className="card-text cnterTextAlign">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </div>
                        <div className="row">
                            <div className="col cnterTextAlign">dsdsad</div>
                            <div className="col cnterTextAlign">dasd</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}