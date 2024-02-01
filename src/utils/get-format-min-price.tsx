import { Product } from "@/lib/shopify/types";

export default function getFormatMinPrice(priceRange: Product["priceRange"]) {
	if (!priceRange.minVariantPrice) {
		return priceRange.maxVariantPrice.currencyCode + " " + priceRange.maxVariantPrice.amount;
	}
	return priceRange.minVariantPrice.currencyCode + " " + priceRange.minVariantPrice.amount;
};