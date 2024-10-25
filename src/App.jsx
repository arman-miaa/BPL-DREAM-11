
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Button from "./components/Main-body/Button/Button";
import Subscript from "./components/Subscribe/Subscript";
import Footer from "./components/Footer/Footer";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  // coin option
  const [coin, setCoin] = useState(0);

  // for active button
  const [activeButton, setActiveButton] = useState("available");

  // for avalabe cards
  const [player, setPlayer] = useState([]);
  // console.log(player);
  
  const handleIsActive = (status)=>{
setActiveButton(status);
  }

  // coin function
  const handleCoin = () => { 
    setCoin(coin + 500000);
    toast('You Added $ 500000');
    
  }


  useEffect(() => {
    fetch('players.json')
      .then(response => response.json())
    .then(data => setPlayer(data.players))
  },[])


  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <Button
        handleIsActive={handleIsActive}
        activeButton={activeButton}
        player={player}
      ></Button>
      <Subscript></Subscript>
      <Footer></Footer>
       <ToastContainer position="top-center" autoClose={5000}  />
    </>
  );
}

export default App;
