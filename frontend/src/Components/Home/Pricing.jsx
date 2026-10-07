 

const Pricing = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">

        {/* Left: heading + text */}
        <div className="w-full lg:w-5/12">
          <h1 className="mb-4 text-3xl font-semibold">Unbeatable pricing</h1>
          <p className="mb-4 text-[#424242]">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 text-decoration-none">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right: 3 items in one row */}
        <div className="flex w-full flex-row items-end justify-between gap-6 lg:w-7/12">
          {/* 1 */}
          <div className="flex items-end gap-1">
            <img src="/images/pricing0.svg" alt="₹0" className="h-[75px] w-auto shrink-0" />
            <p className="mb-1 max-w-[100px] text-[14px] leading-[1.45] text-[#424242]">
              Free account opening
            </p>
          </div>

          {/* 2 */}
          <div className="flex items-end gap-1">
            <img src="/images/pricing0.svg" alt="₹0" className="h-[75px] w-auto shrink-0" />
            <p className="mb-1 max-w-[150px] text-[14px] leading-[1.45] text-[#424242]">
              Free equity delivery and direct mutual funds
            </p>
          </div>

          {/* 3 */}
          <div className="flex items-end gap-1">
            <img src="/images/pricing20.svg" alt="₹20" className="h-[75px] w-auto shrink-0" />
            <p className="mb-1 max-w-[100px] text-[14px] leading-[1.45] text-[#424242]">
              Intraday and F&amp;O
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing