import Button from "../componets/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up form&nbsp;
        <span className="text-coral-red">Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:flex-col gap-5 pl-4 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          className="p-3 rounded-full focus:outline-none focus:ring-0 "
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign-Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
