import { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import BasketQuantity from '../SharedComponents/BasketQuantity';
import { connect } from "react-redux";


function CategoryDetailHeader(props) {
    return(           
       <div className="headersbgimage mb-2">
    <div className="headersbgcolor">
    <div className="row text-white px-3 pt-3 pb-2">
      <div>
        <div className="align-items-center">
              <div className="f_OpenSans_Bold">
                  Home / Food 
              </div>
          </div>
        </div>
          <h1 className="text-center f_OpenSans_Bold">{props.header}</h1>
      </div>
    </div>
      
    </div>)
  }

  function Ingredients(){
    return(<div className="p-5 mybrown"style={{ backgroundColor: '#00BCD433'}}><p>Wheat Flour, Water, Sesame (7,7%), Yeast (Saccharomyces Cerevisiae), Sugar Sherbet, Salt, Baking Additive (Gluten, Wheat Flour, Emulsifiers (E472e, E481), Antioxidant (E300), Acidity Regulator (E330), Enzymes (Fungal Alpha Amylase, Hemicellulase)).</p></div>);
  }

  function NutritionValues(){
    return(
      <div className="p-5"style={{ backgroundColor: '#FF572233'}}>
      <div className="d-flex"><p className="f_OpenSans_Bold w-50 mybrown">Nutrition Values</p><p className="f_OpenSans_Bold w-50 mybrown">(per 100g/ml)</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Energy (KJ)</p><p className="w-50 mybrown">1021</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Energy (KCAL)</p><p className="w-50 mybrown">244</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Fat (G)</p><p className="w-50 mybrown">4.4</p></div>
      <div className="d-flex"><p className="w-50 mybrown">- Of Which Saturates (G)</p><p className="w-50 mybrown">0.6</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Carbohydrate (G)</p><p className="w-50 mybrown">43</p></div>
      <div className="d-flex"><p className="w-50 mybrown">- Of Which Sugars (G)</p><p className="w-50 mybrown">{"<0.5"}</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Protein (G) </p><p className="w-50 mybrown">7.3</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Salt (G)</p><p className="w-50 mybrown">1.2</p></div>  
      </div>
    );
  }

  function AllergyAdvice(){
    return(<div className="p-5 mybrown"style={{ backgroundColor: '#FFEB3B33'}}><p>For allergens, see ingredients in bold. May contain milk, egg, soy, celery, nuts.</p></div>);
  }

  function UsageInfo(){
    return(<div className="p-5 mybrown"style={{ backgroundColor: '#79554833'}}><p>Bake the defrosted product in a pre-heated oven 160 - 180ºC for 4-5 minutes. (Baking time and temperature may vary depending on the type of oven).</p></div>);
  }

  function StorageAndSize(){
    return(
      <div className="p-5 mybrown"style={{ backgroundColor: '#00796B33'}}>
      <div className="d-flex"><p className="w-50 mybrown">Brand</p><p className="w-50 mybrown">Letsdough</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Origin</p><p className="w-50 mybrown">TurkeyLetsdough</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Storage</p><p className="w-50 mybrown">Keep frozen at -18 ºC.</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Net Weight</p><p className="w-50 mybrown">0.4kg</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Collection Unit Price</p><p className="w-50 mybrown">£0.32 each</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Delivery Unit Price</p><p className="w-50 mybrown">£0.45 each</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Size Or Cut</p><p className="w-50 mybrown">1x4</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Quantity Per Layer</p><p className="w-50 mybrown">84</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Pallet Quantity</p><p className="w-50 mybrown">588</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Dimension</p><p className="w-50 mybrown">16.3 x 7 x 34cm</p></div>
      </div>
    );
  }

class ProductDetail extends Component {

    state = {
        item: null,
        selectedImageBody: null
    }

    componentDidMount() {
        axios.get("https://api.caspianpizza.ir/api/Product/FindProductById/" + this.props.ProductDetailId)
    .then(response => {
      this.setState({
        item: response.data.data,
        selectedImageBody: response.data.data.productImages.length !== 0 ? response.data.data.productImages[0].imageBody : null
      });
    })
    .catch(error => {});
  }


  render() {
    if(this.state.item === null){
      return null;
    }
    return ( 
      <>
      <div className="container p-0 pb-5" style={{ border  : '1px solid #e0e0e0' }}>
      <CategoryDetailHeader header={this.state.item.name}/>
        <div className="row justify-content-center px-3">
          <div className="col-lg-4 col-sm-8 col-md-7 col-9 text-center">
          <img
              src={ this.state.selectedImageBody === null ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + this.state.selectedImageBody}
              style={{ aspectRatio: '1/1'}}
              alt="alt product"
              className="img-fluid mb-2 w-100"
            ></img>
            <div className="row imagetiles">
              {this.state.item.productImages.map((item) => (
                <div className="col-3 mb-2 align-self-center cursorpointer" key={item.id} 
                onClick={() => {this.setState({selectedImageBody: item.imageBody})}}>
                <img
                        src={"data:image/png;base64, " + item.imageBody}
                        alt="Temp"
                        loading="lazy"
                        className="img-fluid" 
                    />
                </div>
                 ))}
              
            </div>
         
            
          </div>
          <div className="col-lg-8 ps-lg-5">
            <h2 className="f_Poppins mt-3 mydarkcyan">
            {this.state.item.name}
            </h2>
            <p className="mytextsecondry">{this.state.item.description}</p>
            <div className="mybrown mb-3">
              {/* <div className="col-lg-6 col-9 d-flex justify-content-between"><p>Collection: £<span>4.36</span></p><p>Delivery: £<span>4.68</span></p></div> */}
              £{this.state.item.tradePrice}
              </div>
            {/* <div className="d-flex col-lg-6 col-9 align-items-center justify-content-between mybrown"><p>£4.36 each</p><p>£4.36 each</p></div> */}
            <div className="w-50 cursorpointer">
            <div style={{ maxWidth: '250px' }}><BasketQuantity productId={this.state.item.id}/></div>
            </div>
          </div>
        </div>
        <div className="row px-3 pt-3">
        <Tabs className="noselect d-none d-lg-block">
    <TabList>
      <Tab style={{ backgroundColor: '#00BCD4' , color: 'white' }}>INGREDIENTS</Tab>
      <Tab style={{ backgroundColor: '#FF5722' , color: 'white' }}>NUTRITION VALUES</Tab>
      <Tab style={{ backgroundColor: '#FFEB3B' }}>ALLERGY ADVICE</Tab>
      <Tab style={{ backgroundColor: '#795548' , color: 'white' }}>USAGE INFO</Tab>
      <Tab style={{ backgroundColor: '#00796B' , color: 'white' }}>STORAGE & SIZE</Tab>
    </TabList>

    <TabPanel>
      <Ingredients/>
    </TabPanel>
    <TabPanel>
      <NutritionValues />
    </TabPanel>
    <TabPanel>
      <AllergyAdvice />
    </TabPanel>
    <TabPanel>
      <UsageInfo />
    </TabPanel>
    <TabPanel>
      <StorageAndSize />
    </TabPanel>
  </Tabs>
  <Accordion
        allowMultipleExpanded allowZeroExpanded className="noselect d-block d-lg-none" style={{ color: '#797979' }}>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: '#00BCD4' , color: 'white' }}>
          INGREDIENTS
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      <Ingredients/>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: '#FF5722' , color: 'white' }}>
          NUTRITION VALUES
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      <NutritionValues />
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: '#FFEB3B' , color: 'black' }}>
          ALLERGY ADVICE
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel >
      <AllergyAdvice />
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: '#795548' , color: 'white' }}>
          USAGE INFO
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel >
      <UsageInfo />
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: '#00796B' , color: 'white' }}>
          STORAGE & SIZE
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel >
      <StorageAndSize />
      </AccordionItemPanel>
    </AccordionItem>
    </Accordion>
        </div>
        
      </div>
    </>
    );
  }
}


const mapStateToProps = (state) => ({
  ProductDetailId: state.category.ProductDetailId
})

export default connect(mapStateToProps)(ProductDetail)
