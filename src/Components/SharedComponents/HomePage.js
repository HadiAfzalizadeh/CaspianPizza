import { Component } from "react"
import { Slider } from "./Slider"

export class HomePage extends Component {
    render(){
        return(
            <>
            <div className="container p-0">
                <Slider />
            </div>
            </>
        )
    }
}