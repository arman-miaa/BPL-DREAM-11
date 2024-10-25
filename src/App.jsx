
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
  
  // choose player 
  const [choosePlayer, setChoosePlayer] = useState([]);
  console.log(choosePlayer);

  // delete selected player
  const [deletePlayer, setDeletePlayer] = useState([]);
  
  const handleIsActive = (status) => {
setActiveButton(status);
  }

  // coin function
  const handleCoin = () => { 
    setCoin(coin + 500000);
    toast('You Added $ 500000');
    
  }


  const handleSelectPlayer = (selectPlayer) => {
   
    const isExist = choosePlayer.find(
      (player) => player.playerId === selectPlayer.playerId
    );

   if (selectPlayer.biddingPrice > coin) {
     toast(
       `Not enough coins to select ${selectPlayer.name}. You need $${selectPlayer.biddingPrice}.`
     );
     return coin - selectPlayer.biddingPrice; // Exit the function early if not enough coins
   }
    if (!isExist) {
      if (choosePlayer.length < 6) {
        setCoin((prevCoin) => prevCoin - selectPlayer.biddingPrice);
        setChoosePlayer([...choosePlayer, selectPlayer]);
        toast(
          `You Addad ${selectPlayer.name} and his Price ${selectPlayer.biddingPrice}.`
        );
      } else {
        toast("You can only select up to 6 players.");
      }
    } else {
      toast(`${selectPlayer.name} is already in the list.`);
    }
  };

  // delete selected player function
  const handleDeletePlayer = (deletePlayer) => {
    console.log('delete clicked');
    const newChoosePlayer = choosePlayer.filter(
      (player) => player.playerId !== deletePlayer.playerId
    );
    setChoosePlayer(newChoosePlayer);
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
        handleSelectPlayer={handleSelectPlayer}
        choosePlayer={choosePlayer}
        handleDeletePlayer={handleDeletePlayer}
      ></Button>
      <Subscript></Subscript>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
}

export default App;
