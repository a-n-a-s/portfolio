export const Navbar = () => {
  return (
    <>
      <MobileNav />
      <LargeNav />
    </>
  );
};

const LargeNav = () => {
  return (
    <div className="hidden lg:inline container">
      <div className="w-3/5 container flex items-center justify-between h-24 border-b-2 bg-white mx-auto sticky top-0 ">
        <div className="text-3xl font-semibold text-primary px-2 py-2">
          Anas Mirza
        </div>
        <div className="contianer flex items-center justify-between w-2/6 mr-24 text-large text-gray-500 font-semibold   ">
          <span className="hover:text-primary hover:cursor-pointer hover:bg-gray-100 hover:rounded px-3 py-2">
            Home
          </span>
          <span className="hover:text-primary hover:cursor-pointer hover:bg-gray-100 hover:rounded px-3 py-2">
            <a href="#about">About</a>
          </span>
          <span className="hover:text-primary hover:cursor-pointer hover:bg-gray-100 hover:rounded px-3 py-2">
            Projects
          </span>
        </div>
        <button className="bg-black text-gray-100 font-semibold px-4 py-2 rounded cursor-pointer hover:text-gray-200 ">
          Contact Me
        </button>
      </div>
    </div>
  );
};
const MobileNav = () => {
  return (
    <div className="lg:hidden container">
      <div className="w-3/5 container flex items-center justify-center h-24 border-b-2 bg-white mx-auto sticky top-0 ">
        <div className="text-3xl font-semibold text-primary  py-2 text-center">
          Anas Mirza
        </div>
      </div>
    </div>
  );
};
