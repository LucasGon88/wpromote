import ProductDetail from '@/components/product-detail';
import { getProduct } from '@/lib/shopify/index';
import { Product } from '@/lib/shopify/types';

type Params = {
  handle: string;
}

type Props = {
    params: Params;
} 

export default async function Product({params}: Props) {
  const product = await getProduct(params.handle);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  )
}