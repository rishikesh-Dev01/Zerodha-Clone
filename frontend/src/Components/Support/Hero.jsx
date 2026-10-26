 

const Hero = () => {
  return (
    <div className="container w-full ">
      <div className="px-6 py-6 m-auto max-w-7xl md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 md:pb-8">
          <p className="pr-2 md:text-4xl text-xl sm:text-2xl font-semibold ml-6">
            Support Portal
          </p>
          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 rounded-sm bg-[#387ed1] px-2 py-1.5 text-sm text-white outline-offset-2 transition-transform active:scale-95 hover:bg-[#2f6fbd] md:px-4 md:py-2 md:text-base"
          >
            My tickets
          </button>
        </div>
        <div className="flex h-[60px] items-center gap-3 rounded-sm border border-gray-300 bg-white px-5 transition-shadow focus-within:shadow-[1px_1px_6px_#E0E7EF] md:px-6">
          <span className="hidden text-gray-500 md:block">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </span>
          <input
            type="search"
            aria-label="Search support topics"
            placeholder="Eg: How do I open my account, how do I activate F&O..."
            className="w-full border-0 py-4 pl-1 outline-none"
          />
          </div>
      </div>
    </div>
  );
};

export default Hero;