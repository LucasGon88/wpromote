import Products from '@/components/products';
import { getProducts } from '@/lib/shopify/index';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Products products={products} />
    </div>
  )
}