import React, { Component } from 'react'
import './MegaMenu.css';
import { TopBar } from './TopBar';

export class MegaMenu extends Component {
    render(){
        return(
            <div class="container" id = "MegaMenu">
                <div class="row bottom-border" id = "TopBar">
                    <TopBar />
                </div>
                <div class="row">
                    <div class = "col right-border">1</div>
                    <div class = "col right-border">2</div>
                    <div class = "col right-border">3</div>
                    <div class = "col">4</div>
                </div>
            </div>
        )
    }
}