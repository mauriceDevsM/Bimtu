import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";

const OrderSummary = () => {
	const { subTotal, shipping } = useSelector((state) => state.cart);

	return (
		<Stack
			minWidth='300px'
			spacing='8'
			borderWidth='1px'
			rounded='lg'
			borderColor={mode("cyan.500", "cyan.100")}
			padding='8'
			w='full'
		>
			<Heading size='md'>Order Summary</Heading>
			<Stack spacing='6'>
				<Flex justify='space-between'>
					<Text fontWeight='medium' borderColor={mode("gray.600", "cyan.400")}>
						Subtotal
					</Text>
					<Text fontWeight='medium'>Ksh.{subTotal}</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontWeight='medium' borderColor={mode("gray.600", "cyan.400")}>
						Delivery Fee
					</Text>
					<Text fontWeight='medium'>Ksh.{shipping}</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontSize='xl' fontWeight='extrabold'>
						Total
					</Text>
					<Text fontWeight='medium'>Ksh.{Number(subTotal) + Number(shipping)}</Text>
				</Flex>
			</Stack>
			<Button as={ReactLink} to='/checkout' colorScheme='cyan' size='lg' rightIcon={<FaArrowRight />}>
				Checkout
			</Button>
		</Stack>
	);
};

export default OrderSummary;
