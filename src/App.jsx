
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Button from "./components/Main-body/Button/Button";


function App() {

  // for active button
  const [activeButton, setActiveButton] = useState("available");

  // for avalabe cards
  const [player, setPlayer] = useState([]);
  // console.log(player);
  
  const handleIsActive = (status)=>{
setActiveButton(status);
  }

  useEffect(() => {
    fetch('players.json')
      .then(response => response.json())
    .then(data => setPlayer(data.players))
  },[])


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Button
        handleIsActive={handleIsActive}
        activeButton={activeButton}
        player={player}
      ></Button>
    </>
  );
}

export default App;
