import AvailableCards from "../../AvailableCards/AvailableCards";
import SelectedCards from "../../SelectedCards/SelectedCards";

export default function Button({
  handleIsActive,
  activeButton,
  player,
  handleSelectPlayer,
  choosePlayer,
  handleDeletePlayer,
}) {
  return (
    <div>
      <div className="container mx-auto mt-12 flex justify-between">
        {activeButton === "available"
          ? "Available Players"
          : `Selected Player (${choosePlayer.length}/6)`}

        <div className="space-x-4">
          <button
            onClick={() => handleIsActive("available")}
            style={{
              backgroundColor:
                activeButton === "available" ? "#E7FE29" : "transparent",
            }}
            className="btn"
          >
            Avalable
          </button>
          <button
            onClick={() => handleIsActive("selected")}
            style={{
              backgroundColor:
                activeButton === "selected" ? "#E7FE29" : "transparent",
            }}
            className="btn"
          >
            Selected({choosePlayer.length})
          </button>
        </div>
      </div>
      {activeButton === "available" ? (
        <AvailableCards
          handleSelectPlayer={handleSelectPlayer}
          player={player}
        />
      ) : (
        <SelectedCards
          choosePlayer={choosePlayer}
                      handleIsActive={handleIsActive}
                      handleDeletePlayer={handleDeletePlayer}
        />
      )}
    </div>
  );
}
