import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"
import {Link, Redirect} from 'react-router-dom';
import Success from './Success';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmotthing: "antialiased",
            ":webkit-autofill": {color: "#fce883"}, 
            "::placeholder": {color: "87bfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "ffc7ee"
        }
    }
}

export default function PaymentForm(){
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    


    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("In handle submit.")
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error){
        try {
            const {id} = paymentMethod
            console.log("In if error.")
            const response = await axios.post("http://localhost:8000/pet/id/payment", {
                amount: 1000,
                id
            })
            console.log("After post.")
            if(response.data.success){
                console.log("Successful payment!");
                <Link className="PayButton" to={'/pet/success'}>Pay</Link>
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else{
        console.log(error.message)
    }
}

    return(
        <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">

                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <Redirect to='/pet/success' />
        </div>
        }
        </>
    )
}