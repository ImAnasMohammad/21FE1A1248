
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProduct = () => {
  const redirect = useNavigate();
  const [product,setProduct] = useState({});

  useEffect(()=>{
      try{
        const res = localStorage.getItem('product');

        if(!res)  redirect('/');
        else{
          setProduct(prev=>prev=JSON.parse(res));
        }
      }catch(err){
        console.log(err)
      }
  },[])
  return (
    <div>
      {
        !product?"Product Not Found":<ShowProduct item={product}/>
      }
    </div>
  )
}


const ShowProduct = ({item})=>{
  return<div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    height:'100vh'
  }}>
    <div>Name :- {item?.productName}</div>
    <div>Price :- {item?.price}</div>
    <div>Rating :- {item?.rating}</div>
    <div>Discount :- {item?.discount}</div>
    <div>Available :- {item?.avilability}</div>
  </div>
}
export default SingleProduct
