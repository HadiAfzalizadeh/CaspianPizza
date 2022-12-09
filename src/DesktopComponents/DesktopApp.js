import React, { Component } from 'react'
import { MegaMenu } from './MegaMenu'
import { CategoryPagination } from '../SharedComponents/CategoryPagination'
import { Slider } from '../SharedComponents/Slider'

export class DesktopApp extends Component {
    render(){
        return(
            // <Slider />
             <CategoryPagination />
            // <MegaMenu />
        )
    }
}