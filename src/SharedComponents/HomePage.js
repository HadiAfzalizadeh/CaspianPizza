import { Component } from "react"
import { Slider } from "./Slider"

export class HomePage extends Component {
    render(){
        return(
            <>
            <div style={{ marginTop: '8rem' }}>
                <Slider />
            </div>
            </>
        )
    }
}