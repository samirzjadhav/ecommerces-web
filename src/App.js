import { HiChevronDown } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./App.css";

function App() {
  return (
    <>
      <nav className=" w-auto flex justify-center items-center gap-[40px] p-[20px]">
        <div className="logo">
          <a href="logo-heading">Submit War</a>
        </div>
        <div className="nav-content flex items-center justify-between gap-[20px]">
          <a href="">Home</a>
          <a href="">Feature</a>
          <a href="">Pricing</a>
          <a href="">Customers</a>
          <a href="">ToolKit</a>
          <a href="">Blog</a>
          <div className="flex items-center">
            <a href="">Resources</a>
            <HiChevronDown />
          </div>
        </div>
        <div className="sign-up flex gap-[30px] pl-[30px]">
          <a href="">Sign in</a>
          <div className="orange-btn sign-btn flex items-center gap-[10px]">
            <button>Get started </button>
            <HiArrowNarrowRight />
          </div>
        </div>
      </nav>

      <div className="section home-hero">
        <div className="hero-container">
          <div className="inner-container">
            <h1 className="hero-heading">
              <strong>
                Engaging and qualifying leads doesn't have to hurt.
              </strong>
            </h1>
            <p className="hero-discription">
              With Summit, spend more time selling to prospects who fit your
              ideal customer profile.
            </p>
            <div className="sign-up flex gap-[30px] pl-[30px]">
              <div className="orange-btn hero-btn flex items-center gap-[10px]">
                <button>Get started </button>
                <HiArrowNarrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
