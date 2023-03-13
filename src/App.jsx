import "./sass/style.scss";
import image from "./assets/images/bg-sidebar-mobile.png";

function App() {
  return (
    <main className="App">
      <header className="mobile-header">
        <img
          src={image}
          alt=""
        />
      </header>
    </main>
  );
}

export default App;
