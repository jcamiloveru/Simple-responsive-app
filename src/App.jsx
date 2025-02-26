import Header from "./components/header.jsx";
import AsideAndMain from "./components/asideAndMain.jsx";
import Footer from "./components/footer.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const seeMenu = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header seeMenu={seeMenu}></Header>
      <AsideAndMain seeMenu={seeMenu} isOpen={isOpen}></AsideAndMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
