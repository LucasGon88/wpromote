'use client'

import { NO_IMAGE_URL } from "@/lib/constants";
import { Product } from "@/lib/shopify/types";
import getFormatMinPrice from "@/utils/get-format-min-price";
import { Card, CardBody, CardFooter, Stack, Text, Heading, Divider, Button, Image, Box } from '@chakra-ui/react'
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
    product: Product;
}

type ChakraNextLinkButtonProps =  {
	href: string;
	children: ReactNode;
};


const ChakraNextLinkButton = ({ href, children }: ChakraNextLinkButtonProps) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button as="a" variant='solid' colorScheme='blue'>
        {children}
      </Button>
    </Link>
  );
}
 
export default function ProductCard({product}: Props) {
	return (
		<Box>
			<Card maxW='sm'>
				<CardBody>
					<Image
						height={'300'}
						src={product.images?.[0]?.url || NO_IMAGE_URL}
						alt={product.images?.[0]?.altText || product.title}
						borderRadius='lg'
					/>
					<Stack mt='6' spacing='3'>
						<Heading h='48px' fontWeight='bold' size='l'>{product.title || "Product"}</Heading>
						<Text color='blue.600' fontSize='xl'>
							{getFormatMinPrice(product.priceRange)}
						</Text>
					</Stack>
				</CardBody>
				<Divider color='gray.200' />
				<CardFooter>
					<ChakraNextLinkButton href={`/product/${product.handle}`}>
							Product Details
					</ChakraNextLinkButton>
				</CardFooter>
			</Card>
		</Box>
	)
}