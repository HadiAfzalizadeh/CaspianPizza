import { Component } from "react"
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export class CategoryMenu extends Component {

    constructor(props) {super(props);
        this.state = {currentitems: this.props.items.filter(item => item.parentProductCategoryId === null), 
        totalItems: this.props.items,
        selectedItems: [{ id: null, name:'ALL'}]}}

    itemClicked = (id,name) => { 
        this.state.selectedItems.push({id: id, name: name});
        this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === id) })
    };

    menuTitle = () => {
        if(this.state.selectedItems.length !== 1){
            return(<h1>All {this.state.selectedItems[this.state.selectedItems.length-1].name} Goods</h1>)}
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
        if(this.state.totalItems.find(item => item.parentProductCategoryId === parId) !== undefined ){
            return("parentItemText")
        }
        else{
            return("lastChilItemText")
        }
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
                <button onClick={this.previousClicked}>Previous</button>
                <div className="scrollmenu">
                    {this.state.selectedItems.map(item => <p key={item.id} className="linkButton">
                        {item.name} {this.showArrow(item.id)}</p>)}
                </div>
                {this.menuTitle()}
                <nav>
                    {this.state.currentitems.map(item => (
                        <button onClick={() => this.itemClicked(item.id,item.name)} 
                                className="linkButton item" key={item.id}>
                            <p className={this.showMenuArrow(item.id)}>{item.name}  {this.countSubCategories(item.id)}</p>
                        </button> 
                    ))}
                </nav>
            </>
        )
    }
}