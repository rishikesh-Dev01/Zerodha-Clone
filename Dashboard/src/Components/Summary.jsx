
import Navbar2 from "./Navbar2";

const Summary = () => {
  return (
    <div className="w-full min-w-0">
        <Navbar2/>

      <div className="mt-3 w-full border-b border-[#333] px-3 py-3">
        <p className="text-2xl ml-5">Hi, Rishikesh</p>
      </div>

      <div className="grid w-full grid-cols-2 border-b border-[#333] p-5">
        <div className="min-w-0 px-3">
          <p className="text-gray-300 text-2xl"><i class="fa-solid fa-chart-pie"></i> Equity</p>
          <div className="mt-4 flex w-full items-stretch">
            <div className="flex min-w-0 flex-1 flex-col justify-center border-r border-[#333] py-2 pl-5 pr-6">
              <p className="text-5xl text-gray-500">0</p>
              <p className="text-gray-400">Margin available</p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center pl-6">
              <p className="text-xl text-gray-500">Margins used 0</p>
              <p className="text-gray-400">Opening balance 0</p>
              <a className="summary-link cursor-pointer">view Statement</a>
            </div>
          </div>
        </div>
           
        <div className="min-w-0 px-3 ">
          <p className="text-gray-300 text-2xl"><i class="fa-solid fa-droplet"></i> Commodity</p>
            <div className="mt-4 flex w-full items-stretch">
              <div className="flex min-w-0 flex-1 flex-col justify-center border-r border-[#333] py-2 pl-5 pr-6">
                <p className="text-5xl text-gray-500">0</p>
                <p className="text-gray-400">Margin available</p>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center pl-6">
                <p className="text-xl text-gray-500">Margins used 0</p>
                <p className="text-gray-400">Opening balance 0</p>
                <a className="summary-link cursor-pointer">view Statement</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary