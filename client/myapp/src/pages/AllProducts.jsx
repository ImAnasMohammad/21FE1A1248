import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {toast} from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AllProducts = () => {

    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5MjEwMTQ4LCJpYXQiOjE3MTkyMDk4NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk3OGI0YmZiLWJiN2MtNGFkMS1iMGI4LWEwYjY0NjcxMzYyZCIsInN1YiI6InNoYWlrYW5hczIzMTBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYXR6IHB2dCIsImNsaWVudElEIjoiOTc4YjRiZmItYmI3Yy00YWQxLWIwYjgtYTBiNjQ2NzEzNjJkIiwiY2xpZW50U2VjcmV0IjoiY1NLaWFRdVNmY2h6bWtRciIsIm93bmVyTmFtZSI6IkFuYXMgTW9oYW1tYWQiLCJvd25lckVtYWlsIjoic2hhaWthbmFzMjMxMEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMUZFMUExMjQ4In0.Bwg7gVqsU2JXmE9pD5m9D-a9EgEbw5r-34U5y3a_GQw"
    const [allProducts,setAllProducts] = useState([]);

    useEffect(()=>{
        const URL = "http://20.244.56.144/test/companies/AMZ/categories/Laptops/products?top=10&minPrice=10&maxPrice=10000";

        const fetchData = async ()=>{
            try{
                const res = await axios.get(URL,{
                    headers: {
                      Authorization: authToken
                    },
                  });
                  if(res.data){
                    setAllProducts(res.data)
                  }
            }catch(err){
                console.log(err);
                toast.error("Something went wrong.")
            }
        }

        fetchData();
    },[])

  return (
    <Container>
      <Row md={4}>
        {
            allProducts?.map((item,key)=><Col className='m-3 mr-2' key={key}><SingleProduct item={item}/></Col>)
        }
      </Row>
    </Container>
  )
}

const SingleProduct = ({item})=>{

    const redirect = useNavigate()

    const handleClick = ()=>{
        localStorage.setItem('product',JSON.stringify(item));
        redirect('/singleProduct')
    }
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title>{item?.productName}</Card.Title>
        <Card.Text>
          {
            item?.price
          }
        </Card.Text>
        <Button onClick={handleClick}>See Details</Button>
      </Card.Body>
    </Card>
  );

}

export default AllProducts
