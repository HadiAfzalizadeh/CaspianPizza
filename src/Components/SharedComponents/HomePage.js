import { Component } from "react"
import { Slider } from "./Slider"

export class HomePage extends Component {
    render(){
        return(
            <>
            <div className="container-lg-fluid py-lg-1 px-lg-5">
                <Slider />
            </div>
            </>
        )
    }
}