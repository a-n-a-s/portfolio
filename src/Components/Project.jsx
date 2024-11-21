export const Project = () => {
  return (
    <>
      <LargeProjects />
      <MobileProjects />
    </>
  );
};
const LargeProjects = () => {
  const n = 4;
  return (
    <div className="hidden lg:inline container">
      <div className="w-3/5 container flex flex-col items-start py-20 my-10   border-b-2 bg-gra-100 mx-auto ">
        <div className="text-primary font-semibold text-3xl my-8">Projects</div>
        <div className="text-gray-500 tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>

        <div className="grid w-full grid-cols-2 my-8 gap-x-6 gap-y-8">
          {[...Array(n)].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileProjects = () => {
  const n = 4;
  return (
    <div className="lg:hidden container">
      <div className="w-4/5 container flex flex-col items-start py-20 my-10   border-b-2 bg-gra-100 mx-auto ">
        <div className="text-primary font-semibold text-3xl my-8">Projects</div>
        <div className="text-gray-500 tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>

        <div className="grid w-full  grid-cols-1 my-8 gap-x-6 gap-y-8">
          {[...Array(n)].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div className=" w-full h-96 p-6 bg-gray-100  rounded-2xl hover:bg-gray-200">
        <div className="mt-8 mb-16">
          <img
            src="https://cdn.prod.website-files.com/5fd908fb4e197900bca2f9f3/655fc49676529a680359e9c5_business-logo-minimalfolio-x-webflow-template.svg"
            alt=""
          />
        </div>
        <div className="text-primary text-2xl font-semibold mt-4 mb-8">
          Book My Show Clone
        </div>
        <div className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          accusantium.
        </div>
      </div>
    </>
  );
};
