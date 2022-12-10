import React, { Component } from 'react'
import { HomePage } from '../SharedComponents/HomePage'
import { MegaMenu } from './MegaMenu'
import { CategoryPage } from './CategoryPage'

export class DesktopApp extends Component {

    state = {
        CurrentPage : ''
    };

    selectComponent(){
        switch (this.state.CurrentPage) {
            case 'h':
                return <HomePage />
            case 'b':
                return <CategoryPage />
            default:
                return <HomePage />
        }
    }


    render(){
        return(
            <>
                <div className='container'>
                    <div className='row'>
                        {this.selectComponent()}
                    </div>
                </div>
            </>
        )
    }
}