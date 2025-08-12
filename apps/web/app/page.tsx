import CreateProduct from "./create-product/create-product";
import Products from "./products/products";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <h1>Long live Turborepo!</h1>
      <CreateProduct />
      <Products />
    </>
  );
}
