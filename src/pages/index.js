import { Inter } from "next/font/google";
import { HiChevronDown } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className=" w-auto flex justify-center items-center gap-[40px] p-[20px]">
        <div className="logo flex items-center justify-center">
          <img src="./img/thunder.png" className="w-[34px] h-[34px]" alt="" />
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
        <div className="container hero-container">
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
        <img src="./img/homepage-hero.png" alt="" />
        <div className="bg-now"></div>
      </div>

      <div className="section pain-section bg-[#f7f9fa]">
        <div className="pain-container container ">
          <div className="pain-wrapper max-w-[500px]">
            <div className="pain-display">
              <h2 className="home-heading w-full">
                <strong>The fragmented tools in your funnel are </strong>
                <span>
                  <strong className="merriweather">pushing away </strong>
                </span>
                <strong> your prospects.</strong>
              </h2>
            </div>
          </div>
          <div className="pain-items">
            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/email.svg" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>

            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/calls.svg" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>

            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/under.svg" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>

            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/spread.webp" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>

            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/traffic.svg" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>

            <div className="pain-item">
              <div className="pain-item-icon">
                <img src="./img/treadmill.svg" className="pain-img" alt="" />
              </div>
              <div className="pain-item-content">
                <h3 className="pain-item-title">Impersonal outreach emails</h3>
                <p className="pain-item-discription">
                  Enriching contacts with the same data as your competitors
                  makes your messages sound inauthentic, lowering open rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section pt-[100px] pb-[100px]">
        <div className="container">
          <div className="inner-container">
            <img
              src="./img/logo-illustration.webp"
              className="logo-img"
              alt=""
            />
            <div className="logo-info">
              <h1 className="pain-item-title logo-heading">
                Submit war is a sales and marketing platform to attract and
                qualify leads using engaging, low-code apps.
              </h1>
              <p className="pain-item-discription logo-discription">
                Gain new insights into your customer’s needs and personalize
                their buying experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
