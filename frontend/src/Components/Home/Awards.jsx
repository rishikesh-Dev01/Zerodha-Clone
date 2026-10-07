 

const Awards = () => {
  return (
    <div>
        <div className="container mt-5">
          <div className="row">
              <div className="col-6">
                  <img src="/images/largestBroker.svg" alt=" Awards image" />
              </div>
              <div className="col-6 p-5 mt-3">
                <h1 className="font-semibold">Large stock broker in india</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <div className="row">
                  <div className="col-6">
                      <ul className="awards-list">
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                      </ul>
                  </div>
                  <div className="col-6">
                      <ul className="awards-list">
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds & Govt. securities</li>
                      </ul>
                  </div>
                </div>
                <img src="/images/pressLogos.png" alt="press image" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Awards