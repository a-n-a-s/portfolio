export const About = () => {
  return (
    <>
      <LargeAbout />
      <MobileAbout />
    </>
  );
};
const LargeAbout = () => {
  return (
    <div className="hidden lg:inline container" id="about">
      <div className="w-3/5 container flex flex-col items-start py-20 my-10   border-b-2 bg-gra-100 mx-auto">
        <div className="text-primary font-semibold text-3xl my-4">About me</div>
        <div className="text-gray-500 tracking-wider gap-4 flex py-4">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            tempor, malesuada adipiscing congue diam. Quis orci amet porttitor
            blandit amet nullam sit. Elit, purus blandit non ut non quam
            curabitur.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            tempor, malesuada adipiscing congue diam. Quis orci amet porttitor
            blandit amet nullam sit. Elit, purus blandit non ut non quam
            curabitur.
          </div>
        </div>
      </div>
    </div>
  );
};
const MobileAbout = () => {
  return (
    <div className="lg:hidden container">
      <div className="text-gray-500 tracking-wider gap-4 flex flex-col w-4/5 mx-auto py-4">
        <div className="text-primary font-semibold text-3xl my-4">About me</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit. Elit, purus blandit non ut non quam curabitur.
        </div>

      </div>
    </div>
  );
};
