import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div className="App">
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
}

export default ProductDetailPage;
