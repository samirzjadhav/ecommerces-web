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
        <img src="./img/homepage-hero.png" className="hero-img" alt="" />
        <div className="bg-now"></div>
      </div>

      <div className="section pain-section bg-[#f7f9fa]">
        <div className="pain-container container">
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
          <div className="information grid grid-cols-3 gap-[40px]">
            <div className="info-wrapper">
              <div className="img-wrapper">
                <img src="./img/calculator-illustration.png" alt="" />
              </div>
              <div className="img-content">
                <h3 className="img-heading">Launch apps without engineering</h3>
              </div>
              <p className="img-discription">
                Calculators, forecasts, and simulations help your customers on
                their journey from problem awareness to purchase
              </p>
            </div>
            <div className="info-wrapper">
              <div className="img-wrapper">
                <img src="./img/funnel-illustration.png" alt="" />
              </div>
              <div className="img-content">
                <h3 className="img-heading">
                  Win over customers throughout your funnel
                </h3>
              </div>
              <p className="img-discription">
                Interactive apps are durable assets that increase engagement,
                brand affinity, and conversion rates.
              </p>
            </div>
            <div className="info-wrapper">
              <div className="img-wrapper">
                <img src="./img/profile-illustration.png" alt="" />
              </div>
              <div className="img-content">
                <h3 className="img-heading">
                  Capture a rich profile of your buyer
                </h3>
              </div>
              <p className="img-discription">
                All data inputs and outputs from your apps are tracked and
                integrated throughout your sales and marketing stack.
              </p>
            </div>
          </div>
          <div className="section flex justify-center items-center mt-[40px]">
            <button className="info-btn info-orange">Take a Tour</button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="inner-container flex items-center">
          <div className="engagement py-[80px] px-[120px]">
            <div className="engagement-inner">
              <div className="enga-title flex items-center gap-[10px]">
                <img src="./img/engagement.svg" alt="" />
                <h2>Engagement</h2>
              </div>
              <div className="enga-heading">
                <h2>Generate demand with a powerful, branded toolkit</h2>
              </div>
              <p className="enga-discription">
                Summit lets you launch a branded minisite to host your apps.
                Start driving traffic by linking from the Resources tab of your
                main site or relevant blog posts. Each tool lives on a dedicated
                landing page with an email CTA in the footer.
              </p>
              <div className="">
                <div className="border-b-2 my-[30px]"></div>
              </div>

              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/rocket.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">Pre-built, ready to use</h3>
                  <p className="text-[18px] text-gray-400">
                    Choose from our existing collection of apps targeting a
                    range of industries.
                  </p>
                </div>
              </div>
              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/marketing.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">
                    Real-time lead capture & CTA’s
                  </h3>
                  <p className="text-[18px] text-gray-400">
                    Allow unlimited usage, or ask for an email address to run
                    your apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="enga-btn flex items-center py-[16px] px-[20px] gap-[10px] text-white bg-[#00acc7] w-[200px] rounded-full">
              <a href="" className="font-bold text-[16px]">
                See an example
              </a>
              <HiArrowNarrowRight />
            </div>
          </div>
          <div className="enga-img ">
            <img src="./img/engagement.png" alt="" />
          </div>
        </div>
        <div className="inner-container flex items-center">
          <div className="enga-img  pl-[20px]">
            <img src="./img/enrichment.png" alt="" />
          </div>
          <div className="engagement py-[80px] px-[120px]">
            <div className="engagement-inner">
              <div className="enga-title flex items-center gap-[10px]">
                <img src="./img/engagement.svg" alt="" />
                <h2>enrichment</h2>
              </div>
              <div className="enga-heading">
                <h2>Visitors actively enrich their own profiles</h2>
              </div>
              <p className="enga-discription">
                The heart of the platform is sharing insights between you and
                your customers. Your apps provide answers based on your
                expertise and the inputs your customers provide (zero-party
                data). These inputs flow into your CRM as properties on contacts
                – new attributes to radically upgrade your segmentation and
                automation sequences.
              </p>
              <div className="">
                <div className="border-b-2 my-[30px]"></div>
              </div>

              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/profile.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">Send inputs to properties</h3>
                  <p className="text-[18px] text-gray-400">
                    Create rich profiles of your contacts using the inputs they
                    provide across your apps.
                  </p>
                </div>
              </div>
              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/tracking.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">
                    1-click integration with popular CRM’s
                  </h3>
                  <p className="text-[18px] text-gray-400">
                    Easily connect to HubSpot, Salesforce and more. No
                    engineering required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-container flex items-center">
          <div className="engagement py-[80px] px-[120px]">
            <div className="engagement-inner">
              <div className="enga-title flex items-center gap-[10px]">
                <img src="./img/exten.svg" alt="" />
                <h2>EXTENSIBILITY</h2>
              </div>
              <div className="enga-heading">
                <h2>Create and publish new apps without engineering</h2>
              </div>
              <p className="enga-discription">
                The foundation of the platform is a low-code development
                environment, powered by an infinite canvas and a visual
                scripting language with spreadsheet-like syntax. With one tool,
                you can create simple calculators, sophisticated forecasts, or
                powerful simulations in minutes.
              </p>
              <div className="">
                <div className="border-b-2 my-[30px]"></div>
              </div>

              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/individual.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">
                    individual lead profile Rapid development & visualization
                  </h3>
                  <p className="text-[18px] text-gray-400">
                    Easily create tables, charts, graphs, and metrics. Our
                    WYSIWYG makes it easy.
                  </p>
                </div>
              </div>
              <div className="enga-content flex items-start gap-[10px]">
                <img
                  src="./img/earth.svg"
                  className="w-[36px] h-[36px]"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[20px]">Accessible from anywhere</h3>
                  <p className="text-[18px] text-gray-400">
                    Every app can be embedded, hosted in your toolkit, or called
                    programmatically using its own API.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="enga-img  pl-[20px]">
            <img src="./img/extensibility.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section pt-[100px] pb-[40px] ">
        <div className="container">
          <div className="starter-title flex gap-[10px]">
            <img src="./img/play.svg" alt="" />
            <h1 className="uppercase font-bold text-[#00acc7]">
              How to Get started
            </h1>
          </div>
          <div className="starter flex justify-between mb-[56px]">
            <h1 className=" text-[40px] font-bold w-[400px]">
              Zero assembly or engineering projects required.
            </h1>
            <div className="starter-btn flex items-center">
              <div className="flex gap-[10px] text-[18px] font-medium items-center h-[30px] bg-[#00acc7] rounded-full py-[26px] px-[30px] text-white">
                <button>Get started</button>
                <HiArrowNarrowRight />
              </div>
            </div>
          </div>
          <div className="information grid grid-cols-3 gap-[40px]">
            <div className="info-wrapper">
              <h1 className="start-title">01</h1>
              <div className="img-content">
                <h3 className="img-heading">Get a personalized demo</h3>
              </div>
              <p className="img-discription">
                We’ll learn about your go-to-market goals and guide you through
                Summit’s features, from enrichment to connectivity, to make sure
                you can get the most out of the platform.
              </p>
            </div>
            <div className="info-wrapper">
              <h1 className="start-title">02</h1>
              <div className="img-content">
                <h3 className="img-heading">We assemble your toolkit</h3>
              </div>
              <p className="img-discription">
                No integration work needed! Just select the apps to include in
                your toolkit. Onboarding includes custom app development (on
                request) and training.
              </p>
            </div>
            <div className="info-wrapper">
              <h1 className="start-title">03</h1>
              <div className="img-content">
                <h3 className="img-heading">Publish!</h3>
              </div>
              <p className="img-discription">
                Point your own domain to your toolkit with a simple DNS change,
                create links from your existing content and pages, and start
                promoting your new apps to your audience.
              </p>
            </div>
          </div>

          <div className="section flex justify-center items-center mt-[40px]">
            <button className="info-btn border-[#00acc7] text-[#00acc7]">
              Take a Tour!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
