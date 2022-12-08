import { Component } from "react"

export class MegaMenuColumn extends Component {

    render(){
        if(this.props.items === undefined){
            return null;
        }
        return(
            <nav>
                {this.props.items.map(item => (
                    <button onClick={this.itemClicked} className="linkButton item" key={item.id}>
                        <p className="parentItemText">{item.name}</p>
                    </button> 
                ))}
            </nav>
        )
    }
}