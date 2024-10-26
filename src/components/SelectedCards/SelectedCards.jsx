

export default function SelectedCards({ choosePlayer, handleIsActive, handleDeletePlayer }) {
  console.log("Current selected players:", choosePlayer);
  return (
    <div className="container mx-auto mt-4">
      <div>
        {/* <h1>Selected Cards </h1> */}
        {choosePlayer.map((player) => (
          <div className="flex justify-between border-2 rounded-xl mt-4 items-center p-[20px]">
            <div className="flex items-center  gap-6">
              <div className="w-32 h-24">
                <img
                  className="rounded-xl w-full h-full"
                  src={player.image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{player.name}</h3>
                <div className="flex gap-4">
                  <p>{player.role},</p>
                  <p>Price: ${player.biddingPrice}</p>
                </div>
              </div>
            </div>

            <i
              onClick={() => handleDeletePlayer(player)}
              className="fa-regular fa-trash-can text-rose-500 text-2xl cursor-pointer"
            ></i>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleIsActive("available")}
        className="btn mt-12 bg-[#E7FE29]"
      >
        Add More Player
      </button>
    </div>
  );
}
