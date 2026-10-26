const Team = () => {
  return (
      <div>
      <div className="container">
        <div className="row p-5 mt-5 text-center">
            <h3 className="text-muted">People</h3>
        </div>
        <div className="row  ">
          <div className="col-1"></div>
          <div className="col-5 text-[1.1rem]  mt-5 p-5 ">
              <img src="/images/Cinematic-rishi-img.png" alt="img" className="img"/>
                <h4 className="text-center mt-3 mr-3 text-muted">Rishikesh pal </h4>
                <h6 className="text-center mt-4 mr-3 text-muted">Founder, CEO</h6>
          </div>
          <div className="col-5 mt-5 text-[1.1rem] p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
               He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>
              Playing basketball is his zen.
            </p>
              Connect on <a className="text-decoration-none" href="">Homepage</a> / <a className="text-decoration-none" href="">TradingQnA</a> / <a className="text-decoration-none" href="">Twitter</a>
            
          </div>
           <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};
  

export default Team