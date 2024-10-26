
export default function AvailableCard({ playerr, handleSelectPlayer }) {
  // console.log(playerr);
  const { name, country, image, rating,role, battingType, biddingPrice } = playerr;
  return (
    <div>
      <div className="card card-compact   border-2 p-6">
        <figure>
          <img
            className="w-full object-cover   h-[300px] rounded-xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <img className="" src="images/icons8-user-30.png" alt="" /> {name}
          </h2>
          <div className="flex justify-between items-center">
            <h3>
              <i className="fa-solid fa-flag mr-1 text-[#131313]"></i> {country}
            </h3>
            <button className="  px-4 py-2 rounded-xl bg-[#1313130D]">
              {role}
            </button>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between items-center mt-[10px]">
            <h3 className="font-bold">Rating</h3>
            <h2>{rating}</h2>
          </div>

          <div className="flex justify-between items-center mt-1">
            <h3 className="font-bold">Batting Type</h3>
            <h2>{battingType}</h2>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Price: $ {biddingPrice}</h3>
            <button
              onClick={() => handleSelectPlayer(playerr)}
              className="border-2 py-2 px-[12px] rounded-xl hover:bg-[#E7FE29]"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
