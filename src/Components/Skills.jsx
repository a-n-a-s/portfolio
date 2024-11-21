const n = 12;
export const Skills = () => {
  return (
    <>
      <LargeSkills />
      <MobileSkills />
    </>
  );
};

const LargeSkills = () => {
  return <div className="hidden lg:inline container">
     <div className="w-3/5 container flex flex-col items-start py-20 my-10   border-b-2 bg-gra-100 mx-auto">
        <div className="text-primary font-semibold text-3xl my-8">Skills</div>
        <div className=" grid w-full grid-cols-4 my-8 gap-x-6 gap-y-8">
          {[...Array(n)].map((e, i) => (
            <Button key={i} />
          ))}
        </div>
      </div>
  </div>;
};
const MobileSkills = () => {
  return (
    <div className="lg:hidden container">
      <div className="w-4/5 container flex flex-col items-start py-20 my-10   border-b-2 bg-gra-100 mx-auto">
        <div className="text-primary font-semibold text-3xl my-8">Skills</div>
        <div className=" grid w-full grid-cols-2 my-8 gap-x-6 gap-y-8">
          {[...Array(n)].map((e, i) => (
            <Button key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
const Button = () => {
  return (
    <>
      <button className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-700 ">
        NodeJS
      </button>
    </>
  );
};
