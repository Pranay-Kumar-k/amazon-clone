import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [ {basket} ] = useStateValue()
    return (
        <div className="checkout">
            <strong>Pay faster for all your shopping needs with Amazon Pay balance</strong><br/>
            <span>Get Instant refund on cancellations | Zero payment failures</span>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* List out all of the checkout Products */}
                    {basket?.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
