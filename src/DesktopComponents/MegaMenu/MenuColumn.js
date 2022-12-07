import { Component } from "react"
import './MenuColumn.css'

export class MenuColumn extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.items);
    }

    render(){
        if(this.props.items === undefined){
            return null;
        }
        return(
            <nav>
                {this.props.items.map(item => (
                    <a href="#" className="item" key={item.id}><p className="itemText">{item.name}</p></a> 
                ))}
            </nav>
        )
    }
}