import Header from "./components/header.jsx";
import AsideAndMain from "./components/asideAndMain.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onClick={handleClick}></Header>
      <AsideAndMain
        onClick={handleClick}
        menuStatus={isMenuOpen}
      ></AsideAndMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
