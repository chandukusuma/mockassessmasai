import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toCart } from '../redux/Cart/action/CartAction'
import {SpageReducer} from '../redux/Individual/SpageReducer'

import './IndividualPage.css'

function IndividualPage() {


    // const [indiv, setIndiv] = useState([]);
    const [loading, setloading] = useState(false);

    const SingleItem = useSelector((state) => {
        return state
    });
    console.log(SingleItem)

    const dispatch = useDispatch();

    const addProd = (product) => {
        dispatch(toCart(product))
    }


    const Loading = () => {
        return (
            <>
                <h1 style={{ 'textAlign': 'center' }}>Loading...</h1>
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <div>
                {/* {
                    SingleItem.map((e) => {
                        return (
                            <>
                                <div className='inner_div'>
                                    <img src={e.image} alt={e.title} className='image' />
                                </div>
                                <div className='content' >
                                    <h4>{e.category}</h4>
                                    <h1>{e.title}</h1>
                                    <h3>{e.price}</h3>
                                    <h3>{e.brand}</h3>
                                </div>
                                <button onClick={() => addProd(e)}>Add To Cart</button>
                                <button>Go To Cart</button>
                            </>
                        )
                    })
                } */}
            </div>
        )
    }

    return (
        <div>
            <div>
                <div>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default IndividualPage