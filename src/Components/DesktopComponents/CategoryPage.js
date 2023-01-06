import { Component } from "react"
import CategoryPagination from "../SharedComponents/CategoryPagination"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Select from 'react-select';

const sortOptions = [
  { value: '0', label: 'Relevance' },
  { value: '1', label: 'Categories' },
  { value: '2', label: 'Name' },
  { value: '3', label: 'Price: Low to High' },
  { value: '4', label: 'Price: High to Low' }
]

const customStyles = {
  control: (base) => ({
    ...base,
    background: "none",
    borderRadius: 0,
    border: '2px solid white',
    color: "white",
    width: '200px',
    "&:hover": {
      border: '2px solid white',
    }
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 1,
    color: "white",
    zIndex: 2000
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    color: 'black'
  }),
  singleValue:(provided) => ({
    ...provided,
    color:"white"
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    "&:hover": {
      color: "white",
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0288D1" : "white",
    cursor: 'pointer'
})
};

function CategoryHeader() {
  return(           
     <div className="headersbgimage">
  <div className="headersbgcolor">
  <div className="row text-white px-3 pt-3 pb-2">
    <div className="d-none d-lg-block">
      <div className="align-items-center d-flex justify-content-between">
            <div className="f_OpenSans_Bold">
                Home / Food 
            </div>
            <div className="d-flex align-items-center">
                <div className="me-5" style={{ whiteSpace: 'nowrap' }}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/><sapm className="f_OpenSans_Bold"> 4 Products Found</sapm></div>
                <div className="d-flex align-items-center"><p className="mb-0 me-3 f_OpenSans_Bold">Sort :</p><Select options={sortOptions} 
                defaultValue={sortOptions[0]}
                styles={customStyles}
                /></div>
            </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <div className="container-fluid mb-2">
        <div className="row mb-2">
      <div className="f_OpenSans_Bold">
                Home / Food 
            </div>
      </div>
      <div className="row">
      <div className="d-flex align-items-center justify-content-center">
                <div className="me-5" style={{ whiteSpace: 'nowrap' }}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/><sapm className="f_OpenSans_Bold"> 4 Products Found</sapm></div>
                <div className="d-flex align-items-center"><p className="mb-0 me-3 f_OpenSans_Bold d-none d-sm-block">Sort :</p><Select options={sortOptions} 
                defaultValue={sortOptions[0]}
                styles={customStyles}
                /></div>
            </div>
      </div>
        </div>
      </div>
        <h1 className="text-center f_OpenSans_Bold">Burger</h1>
    </div>
  </div>
    
  </div>)
}

function CategoryFilter() {
  return(
  <Accordion
    allowMultipleExpanded allowZeroExpanded className="noselect" style={{ border: '1px solid #00796B66' , color: '#797979' }}>
<AccordionItem>
  <AccordionItemHeading>
      <AccordionItemButton style={{ backgroundColor: '#00796BE6' , color: 'white' }}>
      <span className="f_OpenSans_Bold">Features</span>
      </AccordionItemButton>
  </AccordionItemHeading>
  <AccordionItemPanel className="text-start ps-3 py-2">
      <nav>
      <div className="form-check py-1 f_OpenSans_Bold">
        <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault1"></input>
        <label className="form-check-label" for="flexCheckDefault1">
          Popular
        </label>
      </div>
      <div className="form-check py-1 f_OpenSans_Bold">
        <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckChecked2"></input>
        <label className="form-check-label" for="flexCheckChecked2">
          Frozen
        </label>
      </div>
      </nav>
  </AccordionItemPanel>
</AccordionItem>
<AccordionItem>
  <AccordionItemHeading>
      <AccordionItemButton style={{ backgroundColor: '#00796BE6' , color: 'white' }}>
      <span className="f_OpenSans_Bold">Brand</span>
      </AccordionItemButton>
  </AccordionItemHeading>
  <AccordionItemPanel className="text-start ps-3 py-2">
  <nav>
      <div className="form-check py-1 f_OpenSans_Bold">
        <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault3"></input>
        <label className="form-check-label" for="flexCheckDefault3">
          Letsdough
        </label>
      </div>
      </nav>
  </AccordionItemPanel>
</AccordionItem>
<AccordionItem>
  <AccordionItemHeading>
      <AccordionItemButton style={{ backgroundColor: '#00796BE6' , color: 'white' }}> 
      <span className="f_OpenSans_Bold">Size</span>
      </AccordionItemButton>
  </AccordionItemHeading>
  <AccordionItemPanel  className="text-start ps-3 py-2">
  <nav>
      <div className="form-check py-1 f_OpenSans_Bold">
        <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault4"></input>
        <label className="form-check-label" for="flexCheckDefault4">
          1 * 4
        </label>
      </div>
      <div className="form-check py-1 f_OpenSans_Bold">
        <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault5"></input>
        <label className="form-check-label" for="flexCheckDefault5">
          48 * 115
        </label>
      </div>
      </nav>
  </AccordionItemPanel>
</AccordionItem>
</Accordion>
)
}

export class CategoryPage extends Component {

    state={
        isPortrate: false
    }

    render(){
        return(
          <>
          <div className="container-fluid d-none d-lg-block">
            <CategoryHeader />
                <div className="row">
                  <div className="col-3 text-center pb-5">
                    <div className="pt-3 h-100" style={{ borderLeft: '1px solid #e0e0e0' , borderBottom: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }}>
                      <CategoryFilter />
                    </div>
                  </div>
                  <div className="col-9">
                      <CategoryPagination />  
                  </div>
                </div>
            </div>
            <div className="container-fluid d-none d-md-block d-lg-none">
            <CategoryHeader />
                <div className="row">
                  <div className="col-4 mt-1">
                  <CategoryFilter />



                  </div>
                  <div className="col-8">
                      <CategoryPagination  
                      currentCategotyId={this.props.currentCategotyId }
                      currentCategotyPage = {this.props.currentCategotyPage }
                      hasMore = {this.props.categotyHasMore } 
                      items = { this.props.categotyItems }
                      fetchMoreCategoryData = {this.props.fetchMoreCategoryData}
                      isPortrate = {this.state.isPortrate}/>   
                      {/* <CategoryPagination  />    */}
                  </div>
                </div>
            </div>
            <div className="container-fluid d-block d-md-none">
            <CategoryHeader />
                <div className="row">
                  <div className="col-6 mt-1">
                  <CategoryFilter />



                  </div>
                  <div className="col-6">
                      <CategoryPagination  
                      currentCategotyId={this.props.currentCategotyId }
                      currentCategotyPage = {this.props.currentCategotyPage }
                      hasMore = {this.props.categotyHasMore } 
                      items = { this.props.categotyItems }
                      fetchMoreCategoryData = {this.props.fetchMoreCategoryData}
                      isPortrate = {this.state.isPortrate}/>   
                      {/* <CategoryPagination  />    */}
                  </div>
                </div>
            </div>
          </>
            
            
        )
    }
}