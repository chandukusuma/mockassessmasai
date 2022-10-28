import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SINGLE } from '../redux/Individual/IndivAction';
import './ProductPage.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

            await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=10&orderBy=desc')
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
                            <p className='filter3' onClick={() => FilterProduct('men')}>men</p>

                        </div>
                    </div>
                </div>
                <div className='outer_box'>
                    {
                        dataInside.map((e) => {
                            //console.log(e)
                            return (
                                <div className='main_div'>
                                    <div className='outer_div'>
                                        <div className='inner_div'>
                                            <div className='card_div' key={e.id} >
                                                <Card onClick={() => {
                                                    send(e);
                                                     {navigate(`/products/${e.id}`)} 
                                                }}>
                                                    <CardMedia
                                                        component="img"
                                                        alt="green iguana"
                                                        
                                                        image={e.image}
                                                        
                                                        className='media'
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {e.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                           {e.brand}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                          $ {e.price}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                           {e.category}
                                                        </Typography>
                                                    </CardContent>
                                                    {/* <CardActions>
                                                        <Button size="small">Share</Button>
                                                        <Button size="small">Learn More</Button>
                                                    </CardActions> */}
                                                </Card>
                                            </div>
                                        </div>
                                    </div>

                                </div>
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