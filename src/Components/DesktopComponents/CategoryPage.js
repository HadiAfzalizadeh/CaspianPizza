import { Component } from "react"
import { CategoryPagination } from "../SharedComponents/CategoryPagination"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList , faGrip ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FormControl } from "@mui/material"
import { InputLabel , Select , MenuItem , Accordion, AccordionSummary , Typography , AccordionDetails} from "@mui/material"

export class CategoryPage extends Component {

    state={
        isPortrate: false
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{ width: '100%' , height: '3rem' , background: '#00BCD4'  }}>
                    <div className="container align-items-center d-flex justify-content-between f_Poppins" style={{ color: 'white' }}>
                        <div>
                            Home / Food 
                        </div>
                        <div className="d-flex">
                            <div className="p-1" style={{ whiteSpace: 'nowrap' }}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/><sapm>  4 Products Found</sapm></div>
                            <FormControl className="mx-3" fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                defaultValue={10}
                                className="py-1"
                                sx={{
                                    width: '300',
                                    borderColor: 'white',
                                    borderRadius: 0,
                                    height: '2rem',
                                    Color: 'white'
                                }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Sort"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Relevance</MenuItem>
                                    <MenuItem value={20}>Categories</MenuItem>
                                    <MenuItem value={30}>Name</MenuItem>
                                    <MenuItem value={40}>Price: Low to High</MenuItem>
                                    <MenuItem value={50}>Price: High to Low</MenuItem>
                                </Select>
                                </FormControl>
                            <FontAwesomeIcon className="p-1" icon={faList} onClick={() =>{this.setState({isPortrate: true})}} size="xl"/>
                            <FontAwesomeIcon className="p-1" icon={faGrip} onClick={() =>{this.setState({isPortrate: false})}}  size="xl"/>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#F5F5F5'}}>
                <div className="col-3 mt-1">
                <Accordion >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion >
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>



                </div>
                <div className="col-9">
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
        )
    }
}