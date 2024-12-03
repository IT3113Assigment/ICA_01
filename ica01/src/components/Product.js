import '../assets/CSS/layout.css';
import { useState } from 'react'
export default function Product({flowerData,addCart}){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  />
                <div class="card-body">
                <img  src={require(`../assets/image/${flowerData.img}`) }/>
                    <h5 class="card-title">Price:{flowerData.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:{flowerData.qty}</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}