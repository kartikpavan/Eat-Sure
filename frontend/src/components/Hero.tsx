import foodImage from "../assets/images/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative">
      <img src={foodImage} alt="Delicious food" className="object-cover w-full max-h-[600px]" />
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <h1 className="text-xl sm:text-4xl font-bold mb-4">Order Delicious Food Online</h1>
          <p className="text-sm sm:text-lg mb-8">Satisfy your cravings with just a few clicks!</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
