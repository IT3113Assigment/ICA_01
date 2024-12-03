import '../assets/CSS/layout.css';
import { useState } from 'react'
export default function Product({flowerData,addCart}){
    const [ quantity, setQuantity ] = useState()
    
    const product = {
        name:"",
        quantity:"",
        sum:""
    }

    function handleFlower(value) {
        setQuantity(value)
    }

    function addToCart() {

        product.name = flowerData.name
        product.quantity = quantity
        product.sum = quantity * flowerData.price

        if(product) {
            addCart(product)
        }
    }
    return(
        <div className="grid-item">

            <div class="card">
                <img  />
                <div class="card-body">
                <img  src={require(`../assets/image/${flowerData.img}`) }/>
                    <h5 class="card-title">Price:{flowerData.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e) => {handleFlower(e.target.value)}}/>
                    </div>
                    <button class="card-button"onClick={() => {addToCart()}}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}