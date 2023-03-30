import React from 'react';
import "./Ecommerce.css";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";


function Ecommerce(props) {
    return (
        <div id='first_div'>

            <div id='main_div'>

                <div id='image_sec'>
                    <div>
                        <img id='main_img' src={product1} />
                    </div>
                    <div id='sub_div'>
                        <div>
                            <img className='sub_img' src={product1} />
                        </div>
                        <div>
                            <img className='sub_img' src={product2} />
                        </div>
                        <div>
                            <img className='sub_img' src={product3} />
                        </div>
                        <div>
                            <img className='sub_img' src={product4} />
                        </div>
                    </div>
                </div>

                <div id='text_sec'>
                    <div id='sneaker_div'>
                        <p id='p_sneaker'>SNEAKER COMPANY</p>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <div id='long_para'>
                            <p id='para'>These low-profile sneakers are you perfect casual wear companion.Fearutring a durable rubber outer sole. they'll withstand everything the weather can offer.</p>
                        </div>
                        <div>
                            <h2>$125.00  </h2>
                            <p id='p_50'>50%</p>
                        </div>
                        <p id='p250'>$250.00</p>
                    </div>
                    <div id='cart_item'>
                        <div id='plus_minus' className='cart_common'>
                            <img id='minus' src={minus} />
                            <p>0</p>
                            <img id='plus' src={plus} />
                        </div>
                        <div id='add_to_cart' className='cart_common'>
                            <img src={cart} />
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecommerce;