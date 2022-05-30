import React,{ useEffect, useState } from "react";
import {  Grid} from '@chakra-ui/react'
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import styled from "styled-components"

const Appstyled = styled.div`
text-align:center
`;


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  //  Flex = () => <div />;
  //  Grid = () => <div />;
  const [product,setProduct]=useState([])
 
  useEffect (()=> {
  
    fetch(`http://localhost:8080/products`)
    .then((r)=>r.json())
    .then((d)=>{
       setProduct (d);
    
    })
  },[]);

// const count=(e)=>{
// console.log(e)

// }
  return (
    // <Flex>
      < Appstyled>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}
      <Product productlist={product}/>
      </Grid>
      {/* Pagination */}
      <Pagination productlist={product} />
 
    </ Appstyled>
  );
};

export default Products;
