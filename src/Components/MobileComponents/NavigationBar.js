import { Component } from "react"
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping , faHome , faMagnifyingGlass , faBars , faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const UnSelectedNavItem ={  
    color: 'white',
    textDecoration: 'none'
}  

const selectedNavItem ={  
    color: '#E64A19',
    textDecoration: 'none'
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
            <Paper style={{ height: '3.3rem' , width: '100%' ,position: 'fixed' , bottom: 0 , backgroundColor: "#FFC107"}}>
                    <div className='container' style={{ height: '100%' }}>
                        <div className='row align-items-center' style={{ height: '100%' }}>

                            <div className='col text-center' style={{ color: 'white' }} onClick = {this.props.toggleDrawer}><FontAwesomeIcon icon={faBars} size="xl" /><p className="f_OpenSans_Bold" style={{ fontSize: '0.6rem' , margin: 0}}>Menu</p></div>

                            <Link to="/CategoryMenu" className='col text-center' style={this.isSelectedNavItem(2)} onClick = {() => this.setSelectedNavItem(2)}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/><p className="f_OpenSans_Bold" style={{ fontSize: '0.6rem' , margin: 0}}>Browse</p></Link>

                            <Link to="/" className='col text-center' style={this.isSelectedNavItem(3)} onClick = {() => this.setSelectedNavItem(3)}><FontAwesomeIcon icon={faHome} size="xl"/><p className="f_OpenSans_Bold" style={{ fontSize: '0.6rem' , margin: 0}}>Home</p></Link>

                            <Link className='col text-center' style={this.isSelectedNavItem(4)} onClick = {() => this.setSelectedNavItem(4)}><FontAwesomeIcon icon={faCartShopping} size="xl" /><p className="f_OpenSans_Bold" style={{ fontSize: '0.6rem' , margin: 0}}>Basket</p></Link>

                            <Link style={this.isSelectedNavItem(5)} className='col text-center' onClick = {() => this.setSelectedNavItem(5)}><FontAwesomeIcon icon={faUser} size="xl" /><p className="f_OpenSans_Bold" style={{ fontSize: '0.6rem' , margin: 0}}>Profile</p></Link>
                        </div>
                    </div>
                </Paper>
        )
    }
}