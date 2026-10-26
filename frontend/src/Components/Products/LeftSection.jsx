import "./ProductSections.css";

const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="product-section product-section--left">
      <div className="product-section__image">
        <img src={imageURL} alt={`${productName} platform`} />
      </div>
      <div className="product-section__copy">
        <h2 className="product-section__title">{productName}</h2>
        <p className="product-section__description">{productDesription}</p>
        <div className="product-section__links">
          <a className="product-section__link" href={tryDemo}>Try Demo</a>
          <a className="product-section__link" href={learnMore}>Learn More</a>
        </div>
        <div className="product-section__badges">
          <a href={googlePlay} aria-label="Get it on Google Play">
            <img src="/images/googlePlayBadge.svg" alt="Google Play" />
          </a>
          <a href={appStore} aria-label="Download on the App Store">
            <img src="/images/appstoreBadge.svg" alt="App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
