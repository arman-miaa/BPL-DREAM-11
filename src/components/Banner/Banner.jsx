

export default function Banner({ handleCoin }) {
  return (
    <div className="container mx-auto w-11/12 md:w-full  mt-14 bg-black backdrop-blur-2xl overflow-hidden relative rounded-2xl">
      <div
        className="flex flex-col items-center justify-center  gap-4"
        style={{
          backgroundImage: `url('/images/bg-shadow.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          borderRadius: "15px",
        }}
      >
        <img className="w-[250px]" src="/images/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold text-white text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="text-2xl font-medium text-[#FFFFFFB3]">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="border-2 rounded-xl p-2 border-yellow-300">
          <button onClick={handleCoin} className="btn bg-[#E7FE29]">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
