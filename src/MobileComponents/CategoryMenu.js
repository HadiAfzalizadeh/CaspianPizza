import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight  } from "@fortawesome/free-solid-svg-icons"
import { MenuList , MenuItem , Badge , ListItemText , ListItemIcon , Paper } from "@mui/material";

const displayNone = {
    display: 'none'
}


export class CategoryMenu extends Component {

    constructor(props) {super(props);
        this.state = {currentitems: this.props.items.filter(item => item.parentProductCategoryId === null), 
        totalItems: this.props.items,
        selectedItems: [{ id: null, name:'ALL'}]}}

    itemClicked = (id,name) => { 
        this.state.selectedItems.push({id: id, name: name});
        this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === id) })
    };

    showMenuTitle = () => {
        return this.state.selectedItems.length !== 1 ? { borderBottom: '1px solid black' } : displayNone;
    };

    showArrow = (id) => {
        if(this.state.selectedItems[this.state.selectedItems.length-1].id !== id){
            return(<FontAwesomeIcon key={id} icon={faChevronRight} />);
        }
    }

    swiperClicked = (item) => {
        this.state.selectedItems.splice(this.state.selectedItems.indexOf(item)+1);
        this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === item.id) })
    }

    showMenuArrow = (parId) => {
         return this.state.totalItems.find(item => item.parentProductCategoryId === parId) !== undefined ? null : displayNone;
    }

    countSubCategories(id){
        return this.state.totalItems.filter(filterItem => filterItem.parentProductCategoryId === id).length 
        === 0 ? '':
        this.state.totalItems.filter(filterItem => filterItem.parentProductCategoryId === id).length;
    }

    previousClicked = () => {
        if(this.state.selectedItems.length > 1){
            this.state.selectedItems.splice(this.state.selectedItems.indexOf(
                this.state.selectedItems[this.state.selectedItems.length-1]));
            this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === 
                this.state.selectedItems[this.state.selectedItems.length-1].id)});
        }
    }
    
    render(){
        return(
            <>
                <Paper className="scrollmenu" style={{ padding: '.25rem' }}>
                <button onClick={this.previousClicked}>Previous</button>
                    {this.state.selectedItems.map(item => <p key={item.id} className="linkButton">
                        {item.name + " > "} </p>)}
                </Paper> 
                <MenuList>
                <MenuItem style={this.showMenuTitle()}>
                    <ListItemText>All {this.state.selectedItems[this.state.selectedItems.length-1].name} Goods</ListItemText>
                </MenuItem>
                {this.state.currentitems.map(item => (
                    <MenuItem key = {item.id} onClick={() => this.itemClicked(item.id,item.name)}>
                        <ListItemText>{item.name}</ListItemText>
                        <ListItemIcon style={this.showMenuArrow(item.id)}>
                        <Badge badgeContent={this.countSubCategories(item.id)} color="secondary"></Badge>
                        </ListItemIcon>
                        <ListItemIcon style={this.showMenuArrow(item.id)}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </ListItemIcon>
                    </MenuItem>
                    ))}
                </MenuList>
            </>
        )
    }
}