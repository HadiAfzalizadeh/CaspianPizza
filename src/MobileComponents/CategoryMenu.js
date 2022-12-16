import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight , faChevronLeft , faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { style } from "@mui/system"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"

const displayNone = {
    display: 'none'
}

const visibilityNone = {
    visibility : 'hidden'
}

const arrowStyles = {
    base : { display: 'inline'} ,
    hidden : { display : 'none' }
}

const swiperStyles = {
    base: { color: '#795548' , margin: 0 , display: 'inline' },
    isBlue: { color : '#00BCD4' }
}

export class CategoryMenu extends Component {

    state = {currentitems: this.props.items.filter(item => item.parentProductCategoryId === null),
        totalItems: this.props.items,
        selectedItems: [{ id: null, name:'Caspian Pizza'}]}

    itemClicked = (id,name) => {
        this.state.selectedItems.push({id: id, name: name});
        this.setState({currentitems: this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === id) })
        if(this.state.totalItems.filter(propItem => propItem.parentProductCategoryId === id).length === 0){
            this.props.setCurrentCategoryId(id);
        }
    }

    showMenuTitle = () => {
        return this.state.selectedItems.length !== 1 ? { borderBottom: '1px solid black' } : displayNone;
    }

    showArrow = (id) => {
        return this.state.selectedItems[this.state.selectedItems.length-1].id === id ? displayNone : '';  
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

    isPluralCategory = (count) => {
        return count > 1 ? 'Categories' : 'Category';
    }

    showBackbtn = () => {
        return this.state.selectedItems.length === 1 ?  visibilityNone : null;
    }

    isBoldSwiper = (id) => {
        return id === null ? "f_OpenSans_Bold" : "f_OpenSans_Regular" ;
    }

    isBlueSwiper = (id) => {
        return (id !== null && this.state.selectedItems[this.state.selectedItems.length-1].id === id) ? swiperStyles.isBlue : null ;
    }

    render(){
        return(
            <>
                        <div style={{ backgroundColor: '#FFEB3B' , width: '100%' , textAlign: 'center'}}>
                            {this.state.selectedItems.map(item => <p key={item.id} className={this.isBoldSwiper(item.id)} style={{ ...swiperStyles.base , ...this.isBlueSwiper(item.id) }} >{ item.name }<span style={{ ...arrowStyles.base , ...this.showArrow(item.id)}}> <FontAwesomeIcon style={{ display: 'inline' }} icon={faCaretRight} size="sm"/> </span></p>)}
                        </div>    
                    <div className="container" style={{ width: '100%' , backgroundColor: '#00BCD4' , paddingTop: '0.35rem', paddingBottom: '0.35rem' ,textAlign: 'center' , color: 'white'}}>
                        <div className="row">
                            <div className="col-auto" onClick={this.previousClicked} style={this.showBackbtn()}>
                                <p id="mobileMenuTitle" className="f_OpenSans_Regular" style={{ margin: 0 }}><FontAwesomeIcon style={{ display: 'inline' }} icon={faChevronLeft} size="sm"/>Back</p>
                            </div>
                            <div className="col">
                            <p style={{ margin : 0 }} className="f_OpenSans_Bold">{this.state.selectedItems[this.state.selectedItems.length-1].name} Goods</p>
                            </div>
                            <div className="col-auto">
                                <p id="mobileMenuTitle" className="f_OpenSans_Regular" style={{ margin: 0 , visibility: 'hidden'}}><FontAwesomeIcon style={{ display: 'inline' }} icon={faChevronLeft} size="sm"/>Back</p>
                            </div>
                        </div>
                    </div>
                <div style={{ padding: '0.3rem' , backgroundColor: '#F5F5F5' , height: '31.3rem' }}>
                    <nav style={{ backgroundColor: 'white' }}>
                        {this.state.currentitems.map(item => (
                            <div style={{ padding: '0.4rem' , borderBottom : '1px solid #BDBDBD'}} onClick={() => this.itemClicked(item.id,item.name)} key={item.id}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto">
                                            <p style={{ marginBottom: 0 , color: '#757575'}} className="f_OpenSans_Medium">{item.name}</p>
                                        </div>
                                        <div className="col" style={{ textAlign: 'right' }}>
                                            <div style={this.showMenuArrow(item.id)}>
                                                <div style={{ background: '#BBDEFB70', display: "inline-block" , borderRadius: '1rem' , paddingRight: '0.5rem' , paddingLeft: '0.5rem' }}>
                                                    <p className="f_OpenSans_Regular" style={{ display: 'inline' , marginRight: '0.1rem' , marginBottom: 0 , color: '#1976D2' , fontSize: '0.75rem'}}>{this.countSubCategories(item.id)} {this.isPluralCategory(this.countSubCategories(item.id))} </p>
                                                    <FontAwesomeIcon style={{ display: 'inline' , color: '#1976D2' }} icon={faChevronRight} size="sm"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </>
        )
    }
}