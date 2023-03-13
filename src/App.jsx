import "./sass/style.scss";
import imageMobile from "./assets/images/bg-sidebar-mobile.svg";
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <>
      <header className="mobile-header">
        <img
          src={imageMobile}
          alt="Colorful background image"
        />
      </header>
      <main className="content-container">
        <FormContainer
          title="Personal info"
          subTitle="Please provide your name, email, address, and phone number."
        />
      </main>
      <footer className="form-buttons-mobile">
        <button className="cta">Go back</button>
        <button className="cta cta-filled">Next step</button>
      </footer>
    </>
  );
}

export default App;
