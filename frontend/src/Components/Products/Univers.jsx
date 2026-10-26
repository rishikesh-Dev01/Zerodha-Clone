const Univers = () => {
  return (
    <div>
      <div className="container">
        <h3 className="univers text-muted">The Zerodha Universe</h3>
        <p className="text-center mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5 p-5">
          <div className="col-4">
            <img
              src="/images/zerodhaFundhouse.png"
              width="198"
              height="55"
              alt="img"
              className="ml-20"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/images/sensibullLogo.svg"
              width="228"
              height="40"
              alt="img"
              className="ml-20"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/images/tijori.svg"
              width="145"
              height="55"
              className="ml-20"
              alt="img"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-4">
            <img
              src="/images/streakLogo.png"
              width="166"
              height="55"
              alt="img"
              className="ml-20"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/images/smallcaseLogo.png"
              width="210"
              height="55"
              alt="img"
              className="ml-20"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Thematic investing platform<br />
              that helps you invest in diversified<br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/images/dittoLogo.png"
              width="143"
              height="55"
              alt="img"
              className="ml-20"
            />
            <p className="mt-3 text-sm text-center text-muted">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </div>
          <button className="bg-blue-500 w-auto px-4 mt-5 font-semibold border-none text-white active:scale-95 py-2.5 block mx-auto rounded text-xl">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Univers;
