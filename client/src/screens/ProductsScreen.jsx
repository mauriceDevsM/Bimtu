import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
//import axios from 'axios';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../redux/actions/productActions";

const ProductsScreen = () => {
    const dispatch = useDispatch();
    const {loading, error, products, pagination} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    return (
        <>
        {products.length > 1 &&(
            <Box>
                <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md:'20', lg:'32'}} >
                     {/* <ProductCard product={ data[0]} loading={false} /> */}
                     {products.map((product) => (
                        <WrapItem key={product.id}>
                            <Center w='250px' h='450px'>
                            <ProductCard product={ product } loading={loading} />
                            </Center>
                        </WrapItem>
                     ))}
                </Wrap>
            </Box>
        )}
            
        </>
    );
}
export default ProductsScreen;