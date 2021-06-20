import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IxhYVLS3Z3li9aHnybozxzy6jScbWCGYyqZ4jiPHTjHtqbvNoOjSocsQhSL5S9h6AwwXIrf1RkM342St0pwsnMi00Rp3Sz3Ad"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}