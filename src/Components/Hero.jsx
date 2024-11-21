export const Hero = () => {
  return (
    <>
      <LargeAbout />
      <MobileAbout />
    </>
  );
};
const LargeAbout = () => {
  return (
    <div className="hidden lg:inline container">
      <div className="w-3/5 my-16 container flex items-center justify-between  border-b-2 bg-gra-100 mx-auto py-20">
        <div className="flex  flex-col gap-8 tracking-wider w-3/5">
          <div>
            <span className="text-4xl font-semibold ">Hello, I am Anas.</span>
            <br />
            <span className="text-4xl font-semibold">
              A Frontend Developer.
            </span>
          </div>
          <p className="text-gray-500 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
            porta lorem morbi hendrerit. Maecenas et, at quis purus.
          </p>
          <span className="  text-gray-900 font-semibold  py-2 rounded cursor-pointer hover:text-gray-600 ">
            Contact Me
          </span>
        </div>
        <div className="">
          <div className="w-72 md:w-64 ">
            <img
              src="https://assets-global.website-files.com/5fd908fb4e19797598a2f9ed/5fd923e456b71f08e5899b2e_image-home-hero-portfolio-x-template-p-500.jpeg"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileAbout = () => {
  return (
    <div className="lg:hidden container">
      <div className="my-20 w-4/5 mx-auto">
        <div className="my-20 ">
          <img
            src="https://assets-global.website-files.com/5fd908fb4e19797598a2f9ed/5fd923e456b71f08e5899b2e_image-home-hero-portfolio-x-template-p-500.jpeg"
            alt=""
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          <span className="text-3xl font-semibold ">Hello, I am Anas.</span>
          <br />
          <span className="text-2xl font-semibold">A Frontend Developer.</span>
        </div>
        <p className="text-gray-500 tracking-wider my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus porta
          lorem morbi hendrerit. Maecenas et, at quis purus.
        </p>
        <span className="  text-gray-900 font-semibold  py-2 rounded cursor-pointer hover:text-gray-600 ">
          Contact Me
        </span>
      </div>
    </div>
  );
};
