import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material';


export default function Product() {
    const [products, setProducts] = useState([])
    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    console.log(products)

    const addNumbers = function (num1, num2) {
        return num1 + num2
    }
    console.log(addNumbers(2, 3))

    return (
        <>
            <Grid container>
                {
                    products.map((products, index) => (
                        <Grid item key={index} sm={4} lg={3} >
                            <Card width='18rem'>
                                <CardMedia
                                    sx={{ height: '130px', width: '100px' }}
                                    image={products.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {products.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {products.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    )
                    )
                }
            </Grid>
        </>
    )
}
