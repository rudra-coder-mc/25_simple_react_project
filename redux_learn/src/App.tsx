import "./App.css";
import { Counter } from "./features/counter/Counter";
import ThemeBtn from "./features/theme/Theme";

function App() {
  return (
    <>
      <div>
        <ThemeBtn />
      </div>
      <div className="card">
        <Counter />
      </div>
    </>
  );
}

export default App;
