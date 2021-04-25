import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeHooks from "./components/CakeHooks";
import { Provider } from "react-redux";
import store from "./cakes/CakeStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeHooks /> */}
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
