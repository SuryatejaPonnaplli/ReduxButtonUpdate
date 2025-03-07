import { Provider } from "react-redux";
import store from "./store/store";
import ButtonComponent from "./components/ButtonComponent";
const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux Button Update</h1>
      <ButtonComponent />
    </Provider>
  );
};

export default App;
