import Basket from "./components/Basket";
import BasketContext from "./context/BasketContext";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <BasketContext>
        <Header/>
        <Basket />
      </BasketContext>
    </div>
  );
}

export default App;
