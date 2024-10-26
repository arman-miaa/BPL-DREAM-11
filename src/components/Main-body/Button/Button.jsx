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
      <div className="container mx-auto w-11/12 md:w-full mt-12 flex justify-between text-xl lg:text-2xl font-bold">
        {activeButton === "available"
          ? "Available Players"
          : `Selected Player (${choosePlayer.length}/6)`}

        <div className="border-2 rounded-xl">
          <div
            onClick={() => handleIsActive("available")}
            style={{
              backgroundColor:
                activeButton === "available" ? "#E7FE29" : "transparent",
            }}
            className="btn font-bold border-none"
          >
            Available
          </div>
          <div
            onClick={() => handleIsActive("selected")}
            style={{
              backgroundColor:
                activeButton === "selected" ? "#E7FE29" : "transparent",
            }}
            className="btn font-medium border-none"
          >
            Selected ({choosePlayer.length})
          </div>
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
