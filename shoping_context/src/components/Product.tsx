import { useContext } from "react";
import ShopContext from "../shop/ShopingContext";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

const Product: React.FC<ProductProps> = ({ id, image, title, price, description }) => {
  const shopingData = useContext(ShopContext);

  // Handle case where ShopContext might be undefined
  if (!shopingData) {
    return null; // Or render a fallback UI
  }

  const { handleAddItemToCart } = shopingData;

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;

