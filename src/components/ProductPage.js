import { LocalDining } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SINGLE } from '../redux/Individual/IndivAction';
import './ProductPage.css'


function ProductPage() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(SINGLE(e))
    }


    useEffect(() => {
        const ProductsList = async () => {
            setLoading(true);

            await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setData(res.data);
                    setFilter(res.data);

                    setLoading(false)

                    console.log(data)
                })
                .catch((err) => console.log(err))
        }

        ProductsList()

    }, [])

    const Loading = () => {
        return (
            <>
                <h1 style={{ 'textAlign': 'center' }}>Loading...</h1>
            </>
        )
    }

    const FilterProduct = (categ) => {
        const updatedList = (data).filter((item) => item.category === categ);
        setFilter(updatedList);
    }


    const ShowProducts = () => {

        let dataInside = filter;

        return (
            <>

                <div>
                    <div className='buttons justify-content-center mb-5 pb-5'>
                        <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>Filter By</button>
                        <div className='hidecontent' >
                            <p className='filter1' onClick={() => FilterProduct('kids')}>kids</p>
                            <p className='filter2' onClick={() => FilterProduct('women')}>womens</p>
                            <p className='filter3' onClick={() => FilterProduct('homedecor')}>homedecor</p>

                        </div>
                    </div>
                </div>
                <div>
                    {
                        dataInside.map((e) => {
                            //console.log(e)
                            return (
                                <>
                                    <div onClick={() => {
                                        send(e);
                                        {navigate(`/products/${e.id}`)}
                                    }}>
                                        <div className='col-md-3 mb-4'>
                                            <div class='card h-100 text-center p-4' key={e.id}>
                                                <img src={e.image} class='card-img-top' alt={e.title} height='250px' />
                                                <div class='card-body'>
                                                    <h5 class='card-title mb--0'>{e.title}...</h5>
                                                    <p class='card-text lead fw-bold'>
                                                        $ {e.price}
                                                    </p>
                                                    <p class='card-text lead fw-bold'>
                                                        {e.brand}
                                                    </p>
                                                    <p class='card-text lead fw-bold'>
                                                        {e.category}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </>
        )
    }


    return (
        <div>
            <div className='container my-4 py-4'>
                <div className='row'>
                    <div className='col-12 mb-4'>
                        <h1 className='display-6 fw-bolder text-center'>ENJOY YOUR SHOPPING</h1>
                        <hr />
                    </div>

                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default ProductPage