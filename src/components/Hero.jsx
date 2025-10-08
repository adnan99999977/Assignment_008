import AllCards from "./AllCards";

const Hero = ({data}) => {
    
  return (
    <>
      <section className="hero bg-gradient-to-t from-[#fefeffbe] to-[#cccacc3b]  flex flex-col justify-center items-center text-center pt-16 ">
        <h1 className="text-4xl lg:text-6xl font-bold mb-5">
          We Build <br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold leading-15 ">Productive</span> Apps
        </h1>
        <p className="max-w-[370px] px-2 lg:max-w-3xl text-gray-500 mb-6">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 btn bg-[#ecebee42] border border-[#d2d2d6be] font-semibold px-4 py-2 rounded-sm hover:bg-[#b1b1b33b] transition-all duration-300">
            <img className="w-7" src="/pics/play.png" alt="Google Play" />
            Google Play
          </button>
          <button className="flex items-center gap-2 btn bg-[#ecebee42] border border-[#d2d2d6be] font-semibold px-4 py-2 rounded-sm hover:bg-[#b1b1b33b] transition-all duration-300">
            <img className="w-7" src="/pics/game.png" alt="Google Play" />
            Google Play
          </button>
        </div>

        <img src="/pics/hero.png" alt="App preview" className="mt-8 w-4/5 lg:w-3/5" />

        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-full py-16">
            <h1 className="text-3xl font-semibold tracking-wider pb-8">Trusted by Millions, Built for You</h1>
            <div className="lg:w-6/12 mx-auto lg:px-0 px-4 flex justify-between items-center">
             <div className="space-y-4">
               <p className="text-sm text-gray-200">Total Downloads</p>
               <h1 className="font-extrabold text-3xl lg:text-5xl">29.6M</h1>
               <p className="text-[9px] lg:text-[12px] text-gray-200">21% more than last month</p>
             </div>
             <div className="space-y-4">
               <p className="text-sm text-gray-200">Total Reviews</p>
               <h1 className="font-extrabold text-3xl lg:text-5xl">906K</h1>
               <p className="text-[9px] lg:text-[12px] text-gray-200">46% more than last month</p>
             </div>
             <div className="space-y-4">
               <p className="text-sm text-gray-200">Active Apps</p>
               <h1 className="font-extrabold text-3xl lg:text-5xl">132+</h1>
               <p className="text-[9px] lg:text-[12px] text-gray-200">31 more will Launch</p>
             </div>
            </div>
            
        </div>

        <AllCards data={data}/>
      </section>
    </>
  );
};

export default Hero;
