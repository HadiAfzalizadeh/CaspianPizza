
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faMinus} from "@fortawesome/free-solid-svg-icons";


const BasketQuantity = () => {

    return(<div className="input-group quantity mx-auto text-nowrap">
    <div className="input-group-btn d-inline">
        <button className="btn btn-sm btn-primary btn-minus" style={{ backgroundColor: '#FFC107' , borderRadius: 0 , border: '1px solid #FFC107'}}>
        <FontAwesomeIcon icon={faMinus} size="xl"/>
        </button>
    </div>
    <input  type="text" className="form-control border-0 text-center" value="100" style={{ maxWidth: '100px' }}></input>
    <div className="input-group-btn d-inline">
        <button className="btn btn-sm btn-primary btn-plus" style={{ backgroundColor: '#FFC107' , borderRadius: 0 , border: '1px solid #FFC107'}}>
           <FontAwesomeIcon icon={faPlus} size="xl"/>
        </button>
    </div>
</div>)
}

export default BasketQuantity;