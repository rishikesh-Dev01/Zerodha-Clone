 

const HeroSection = () => {
  return (
    <div>
        <div className="container p-5">
            <div className="row text-center">
                <img src="/images/homeHero.png" alt="Hero image" className="mb-5"/>
                <h1 className="mt-3">Invest in everything</h1>
                <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="bg-blue-500 w-auto px-4 font-semibold border-none text-white active:scale-95 py-2.5 m-auto rounded text-xl ">Sign up for free </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection