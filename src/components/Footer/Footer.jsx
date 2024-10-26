

export default function Footer() {
  return (
    <div className="bg-black  pt-24 flex justify-center items-center">
      <div className="container mx-auto ">
        <div className="flex justify-center mt-20">
          <img src="/images/logo-footer.png" alt="" />
        </div>
        <footer className="footer text-base-content p-10 flex justify-between items-center flex-col md:flex-row ">
          <nav className="text-white">
            <h6 className=" text-xl font-semibold text-white">About Us</h6>
            <p className="text-[#FFFFFF99]">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </nav>
          <nav className="text-[#FFFFFF99]">
            <h6 className="text-white text-xl font-semibold">Quick Links</h6>
            <ul className="list-disc space-y-2">
              <a href="">
                <li className="mt-2">Home</li>
              </a>
              <a href="">
                <li className="mt-2">Servise</li>
              </a>
              <a href="">
                <li className="mt-2">About</li>
              </a>
              <a href="">
                <li className="mt-2">Contuct</li>
              </a>
            </ul>
          </nav>
          <form className="text-white">
            <h6 className="text-white text-xl font-semibold">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-[#FFFFFF99]">
                  Subscribe to our newsletter for the <br /> latest updates.
                </span>
              </label>
              <div className="join mt-2">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-[#ff5733] rounded-l-none ml-2 bg-gradient-to-t from-[yellow] via-[#ff5733]">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <hr
          style={{
            backgroundColor: "gray",
            height: "1px",
            border: "none",
          }}
        />
        <p className="text-[#FFFFFF99] text-center py-8">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
