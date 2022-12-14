import React from 'react'
import { useCart } from 'react-use-cart';


//card individual

const Product = (props) => {

    const { addItem } = useCart();
    
    return(

                    <div className="card" key={props.index}>
                        <img src={props.element.image} className="cardImage"></img>
                        <h4><b>{props.element.name}</b></h4>
                        <p>{props.element.category.name}</p>
                            <p>${props.element.price}</p>
                            <button className="btn btn-success" onClick={() => addItem(props.element)}>Add to Cart</button>
                    </div>

    )
}
export default Product