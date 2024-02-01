'use client'

import { getProduct } from "@/lib/shopify/index";
import type {Product} from "@/lib/shopify/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import getFormatMinPrice from "@/utils/get-format-min-price";

const noImageUrl = "https://cdn.shopify.com/s/files/1/0582/1569/4403/files/placeholder.png?v=1706713593";

type Props = {
  product?: Product;
}

export default function ProductDetail({product}: Props) {
	const params = useParams<{ handle: string}>();
	
	const { data } = useQuery({ 
		queryKey: ['product', params.handle], 
		queryFn: () => getProduct(params.handle),
		initialData: product
	});

	if (!data) {
		return null;
	}

	return (
		<SimpleGrid minChildWidth='50%' spacing="0" padding="50px">
			<Box boxSize='lg'>
				<Image src={data?.images?.[0].url || noImageUrl} alt={data?.images?.[0].altText || data?.title} />
			</Box>
			<Box boxSize='md' paddingTop="50px">
				<Heading h='48px' fontWeight='bold' size='lg'>{data.title || "Product"}</Heading>
				{data?.description && (
					<Text color='blue.600' fontSize='xl' paddingTop="20px">
						{data?.description}
					</Text>
				)}
				{data?.priceRange && (
					<Text color='red.600' fontSize='md' paddingTop="20px" fontWeight="bold">
						{getFormatMinPrice(data.priceRange)}
					</Text>
				)}
			</Box>
		</SimpleGrid>
	)
  }