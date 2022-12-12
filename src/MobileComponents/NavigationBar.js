import { Component } from "react"
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping , faHome , faMagnifyingGlass , faBars , faUser } from "@fortawesome/free-solid-svg-icons"

const UnSelectedNavItem ={  
    color: 'white'
}  

const selectedNavItem ={  
    color: '#E64A19'
}  

export class NavigationBar extends Component {

    state = {
        SelectedItem: 3
    };

    isSelectedNavItem = (item) => {
        return this.state.SelectedItem === item ? selectedNavItem : UnSelectedNavItem ;
    }

    setSelectedNavItem = (item) => {
        this.setState({
            SelectedItem: item
        });
    }

    render(){
        return(
            <Paper style={{ height: '3.3rem' , width: '100%' ,position: 'absolute' , bottom: 0 , backgroundColor: "#FFC107"}}>
                    <div className='container' style={{ height: '100%' }}>
                        <div className='row align-items-center' style={{ height: '100%' }}>
                            <div className='col text-center'><FontAwesomeIcon icon={faBars} size="xl" style={this.isSelectedNavItem(1)} onClick = {this.props.toggleDrawer}/></div>
                            <div className='col text-center'><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={this.isSelectedNavItem(2)} onClick = {() => this.setSelectedNavItem(2)}/></div>
                            <div className='col text-center'><FontAwesomeIcon icon={faHome} size="xl" style={this.isSelectedNavItem(3)} onClick = {() => this.setSelectedNavItem(3)}/></div>
                            <div className='col text-center'><FontAwesomeIcon icon={faCartShopping} size="xl" style={this.isSelectedNavItem(4)} onClick = {() => this.setSelectedNavItem(4)}/></div>
                            <div className='col text-center'><FontAwesomeIcon icon={faUser} size="xl" style={this.isSelectedNavItem(5)} onClick = {() => this.setSelectedNavItem(5)}/></div>
                        </div>
                    </div>
                </Paper>
        )
    }
}