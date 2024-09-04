import { useEffect, useState } from "react";
import "./App.css";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [string, string];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: [string];
  thumbnail: string;
};

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const handleChange = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${count * 10}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Update products without duplicating
        // setProduct((prev) => [...prev, ...data.products]);
        setProduct((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newProducts = data.products.filter(
            (p) => !existingIds.has(p.id)
          );
          return [...prev, ...newProducts];
        });
        // setProduct([...data.products]);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  if (loading) return <div>Loading ...</div>;

  if (error) return <div>Error: {String(error)}</div>;

  return (
    <div className="container">
      {product.map((pro) => (
        <div key={pro.id}>
          <p>{pro.id}</p>
          <img src={pro.thumbnail} alt={pro.title} />
          <h4>{pro.title}</h4>
        </div>
      ))}
      <button onClick={handleChange}>Load More</button>
    </div>
  );
}

export default App;
