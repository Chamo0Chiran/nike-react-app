import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../componets/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col sm:w-3">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red">Super</span>&nbsp;
          <span className="text-coral-red">Quality</span>&nbsp;Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring preium comfort and style, our meticulously crafted footware
          is designed to evelate you experiance, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
