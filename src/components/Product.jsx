import React  from "react";
import { Text, Image, Box,Stack,Heading,Tag,TagLabel} from '@chakra-ui/react'
const Product = (prop) => {
  // TODO: Remove below const and instead import them from chakra
  //  Text = () => <div />;
  //  Image = () => <div />;
  //  Box = () => <div />;
  //  Stack = () => <div />;
  //  Heading = () => <div />;
  //  Tag = () => <div />;
  //  TagLabel = () => <div />;
 

  



  return (

 <Stack data-cy="product">
   
  
    
     {prop.productlist.map((el)=>{
        {console.log(el.title)}
     return  <div>
         <Image data-cy="product-image" src={el.imageSrc} />
 <Text data-cy="product-category">{el.category}</Text>
 <Tag>
   <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
 </Tag>
 <Heading data-cy="product-title">{el.title}</Heading>
 <Box data-cy="product-price">{el.price}</Box>
 </div>
 
    
    })}
     
    
     </Stack>
  );
};

export default Product;
