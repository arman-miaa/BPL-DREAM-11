

export default function Subscript() {
  return (
    <div className="container mx-auto mt-36 border-2 p-4 border-gray-400 rounded-xl relative top-32 z-30">
      <div
        className="w-full h-[350px] rounded-xl bg-white backdrop-blur-2xl flex space-y-3 flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/images/bg-shadow.png')`,
          objectFit: "cover",
          backgroundSize: "cover",
          //   background: "#FFFFFF",
        }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="text-xl font-medium text-center text-[#131313B3]">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-1">
          <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow pr-16" placeholder='Enter Your Email' />
          </label>
          <button className="btn px-4 btn-[#ff5733] ml-2 bg-gradient-to-t from-[yellow] via-[#ff5733]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
