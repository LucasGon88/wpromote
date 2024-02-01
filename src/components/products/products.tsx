'use client'

import { getProducts } from "@/lib/shopify/index"
import { Product } from "@/lib/shopify/types"
import { SimpleGrid } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import ProductCard from "@/components/product-card"

type Props = {
  products: Product[]
} 

export default function Products({products}: Props) {
	const { data } = useQuery({ 
		queryKey: ['products'], 
		queryFn: () => getProducts(),
		initialData: products
	});

	if (!data) {
		return null;
	}

	return (
		<SimpleGrid minChildWidth='305px' spacing={10} padding={'20px'}>
			{data.map(product => <ProductCard key={product.id} product={product} />)}
		</SimpleGrid>
	)
}