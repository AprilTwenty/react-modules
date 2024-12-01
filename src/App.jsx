import "./App.css";
import { Header,MainContent, ProductSection, Footer, FAQ } from "./components/layout";


function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
