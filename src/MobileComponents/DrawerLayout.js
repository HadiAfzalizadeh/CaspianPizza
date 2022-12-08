import { Component } from "react"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export class DrawerLayout extends Component {

    constructor(props) {super(props);
        this.state = {isOpen: false,
        currentitems: this.props.items.filter(item => item.parentProductCategoryId === null), 
        totalItems: this.props.items,
        selectedItems: [{ id: null, name:'Browse'}]
        }}

    itemClicked = (id,name) => { 
        this.state.selectedItems.push({id: id, name: name});
        this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === id) })};

    menuTitle = () => {
        if(this.state.selectedItems.length !== 1){
            return(<h1>All {this.state.selectedItems[this.state.selectedItems.length-1].name} Goods</h1>)}};

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
        if(this.state.totalItems.find(item => item.parentProductCategoryId === parId) !== undefined ){
            return("parentItemText")
        }
        else{
            return("lastChilItemText")
        }
    }
    
    render(){
        return(
            <>
                <button onClick={() =>  this.setState({ isOpen: !this.state.isOpen })}>Show</button>
                <nav className="overXscroll">
                        {this.state.selectedItems.map(item => <p onClick={() => this.swiperClicked(item)} 
                            key={item.id} className="inlineNav">
                            {item.name} {this.showArrow(item.id)}</p>)}
                </nav>
                {this.menuTitle()}
                <Drawer
                    open={this.state.isOpen}
                    onClose={() =>  this.setState({ isOpen: !this.state.isOpen })}
                    direction='right'
                    className='bla bla bla'
                >
                    <nav>
                        {this.state.currentitems.map(item => (
                            <button onClick={() => this.itemClicked(item.id,item.name)} 
                                    className="linkButton item" key={item.id}>
                                <p className={this.showMenuArrow(item.id)}>{item.name}  {
                                this.state.totalItems
                                .filter(filterItem => filterItem.parentProductCategoryId === item.id).length === 0 ? '':
                                this.state.totalItems
                                .filter(filterItem => filterItem.parentProductCategoryId === item.id).length}</p>
                            </button> 
                        ))}
                    </nav>
                </Drawer>
            </>
        )
    }
}