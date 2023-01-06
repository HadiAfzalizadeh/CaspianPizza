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


function CategoryDetailHeader() {
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
          <h1 className="text-center f_OpenSans_Bold">Burger</h1>
      </div>
    </div>
      
    </div>)
  }

  function Ingredients(){
    return(<p>Wheat Flour, Water, Sesame (7,7%), Yeast (Saccharomyces Cerevisiae), Sugar Sherbet, Salt, Baking Additive (Gluten, Wheat Flour, Emulsifiers (E472e, E481), Antioxidant (E300), Acidity Regulator (E330), Enzymes (Fungal Alpha Amylase, Hemicellulase)).</p>);
  }

  function NutritionValues(){
    return(
      <>
      <div className="d-flex"><p className="f_OpenSans_Bold w-50 mybrown">Nutrition Values</p><p className="f_OpenSans_Bold w-50 mybrown">(per 100g/ml)</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Energy (KJ)</p><p className="w-50 mybrown">1021</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Energy (KCAL)</p><p className="w-50 mybrown">244</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Fat (G)</p><p className="w-50 mybrown">4.4</p></div>
      <div className="d-flex"><p className="w-50 mybrown">- Of Which Saturates (G)</p><p className="w-50 mybrown">0.6</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Carbohydrate (G)</p><p className="w-50 mybrown">43</p></div>
      <div className="d-flex"><p className="w-50 mybrown">- Of Which Sugars (G)</p><p className="w-50 mybrown">{"<0.5"}</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Protein (G) </p><p className="w-50 mybrown">7.3</p></div>
      <div className="d-flex"><p className="w-50 mybrown">Salt (G)</p><p className="w-50 mybrown">1.2</p></div>  
      </>
    );
  }

  function AllergyAdvice(){
    return(<p>For allergens, see ingredients in bold. May contain milk, egg, soy, celery, nuts.</p>);
  }

  function UsageInfo(){
    return(<p>Bake the defrosted product in a pre-heated oven 160 - 180ºC for 4-5 minutes. (Baking time and temperature may vary depending on the type of oven).</p>);
  }

  function StorageAndSize(){
    return(
      <>
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
      </>
    );
  }

export class ProductDetail extends Component {

    state = {
        item: null,
        selectedImageBody: null,
        isVideo: false
    }

    componentDidMount() {
        axios.get("https://api.caspianpizza.ir/api/Product/FindProductById/11")
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
      <div className="container p-0" style={{ border  : '1px solid #e0e0e0' }}>
      <CategoryDetailHeader />
        <div className="row justify-content-center px-3">
          <div className="col-lg-4 col-sm-8 col-md-7 col-9 text-center">
          { !this.state.isVideo && (<img
              src={ this.state.selectedImageBody === null ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + this.state.selectedImageBody}
              alt="alt product"
              className="img-fluid mb-2"
            ></img>)}
            { this.state.isVideo && (<video className="w-100" controls>
                <source src="mov_bbb.mp4" type="video/mp4"></source> 
                Your browser does not support HTML video.
            </video>)}
            <div className="row imagetiles">
              {this.state.item.productImages.map((item) => (
                <div className="col-3 mb-2 align-self-center cursorpointer" key={item.id} 
                onClick={() => {this.setState({selectedImageBody: item.imageBody , isVideo: false})}}>
                <img
                        src={"data:image/png;base64, " + item.imageBody}
                        alt="Temp"
                        loading="lazy"
                        className="img-fluid" 
                    />
                </div>
                 ))}
                
                <div className="col-3 mb-2 p-3 align-items-center cursorpointer" onClick={() => {this.setState({isVideo: true})}}>
                <img
                        src="/assets/images/video-play-icon.svg"
                        srcSet="/assets/images/video-play-icon.svg"
                        alt="Temp"
                        loading="lazy"
                        className="img-fluid"/>
                </div>
            </div>
         
            
          </div>
          <div className="col-lg-8">
            <h2 className="f_Poppins mt-3 mydarkcyan">
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC
            </h2>
            <p className="mytextsecondry">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <div className="mybrown">
              <div className="col-lg-6 col-9 d-flex justify-content-between"><p>Collection: £<span>4.36</span></p><p>Delivery: £<span>4.68</span></p></div></div>
            <div className="d-flex col-lg-6 col-9 align-items-center justify-content-between mybrown"><p>£4.36 each</p><p>£4.36 each</p></div>

          </div>
        </div>
        <div className="row px-3">
        <Tabs className="noselect d-none d-lg-block">
    <TabList>
      <Tab>INGREDIENTS</Tab>
      <Tab>NUTRITION VALUES</Tab>
      <Tab>ALLERGY ADVICE</Tab>
      <Tab>USAGE INFO</Tab>
      <Tab>STORAGE & SIZE</Tab>
    </TabList>

    <TabPanel>
      <Ingredients />
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
          <AccordionItemButton style={{ backgroundColor: '#00796BE6' , color: 'white', textAlign: 'center' }}>
          Features
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
          Brand
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
          Size
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
        </div>
        
      </div>
    </>
    );
  }
}
