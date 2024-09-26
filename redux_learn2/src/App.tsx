import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useAppSelector } from "./store/hooks";

function App() {
  const ModelState = useAppSelector((state) => state.Model.modelState);
  return (
    <Layout>
      {ModelState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
