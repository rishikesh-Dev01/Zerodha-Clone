 

const Home = () => {
  return (
    <div>
        <div className="container">
            <h2 className="text-center mt-5">Charges</h2>
            <p className="text-center text-muted text-lg mt-3">List of all charges and taxes</p>
             <div className="row">
          <div className="col-4 p-5 mt-2">
            <img
              src="/images/pricing0.svg"
              className="img-price"
              alt="zerodha"
            />
            <h3 className="text-center text-gray-50 ">Free equity delivery</h3>
            <p className="text-sm text-muted text-gray-50 text-center mt-4">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5 mt-2">
            <img
              src="/images/pricing20.svg"
              className="img-price"
              alt="zerodha"
            />
            <h3 className="text-center text-gray-50">
              Intraday and F&O trades
            </h3>
            <p className="text-sm text-muted text-gray-50 text-center mt-4">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5 mt-2">
            <img
              src="/images/pricing0.svg"
              className="img-price"
              alt="zerodha"
            />
            <h3 className="text-center text-gray-50">Free direct MF</h3>
            <p className="text-sm text-muted text-gray-50 text-center mt-4">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home