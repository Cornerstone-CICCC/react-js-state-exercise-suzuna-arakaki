import ToggleLight from "./components/toggleLight";
import LottoNumbers from "./components/lottoNumbers";
import ClickCounter from "./components/clickCounter";

const App = () => {
  return (
    <div>
      <h2>Light Toggle</h2>
      <div>Change this background color using the style attribute</div>
      <ToggleLight />

      <h2>Lotto Numbers</h2>
      <LottoNumbers />

      <h2>Click Counter</h2>
      <ClickCounter />
    </div>
  );
};

export default App;
