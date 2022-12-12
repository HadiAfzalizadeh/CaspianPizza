import { Component } from "react"
import React from "react"
import SwipeableDrawer from "@mui/material/Drawer"

export class DrawerLayout extends Component {

    render(){
        return(
            <React.Fragment>
                <SwipeableDrawer
                    anchor='left'
                    open={this.props.isOpen}
                    onClose={this.props.toggleDrawer}
                >
                    <div style={{ minWidth: '100%' }}>SwipeableDrawer</div>
                </SwipeableDrawer>
            </React.Fragment>
        )
    }
}