import "./ProductSections.css";

const RightSection = ({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) => {
  return (
    <section className="product-section product-section--right">
      <div className="product-section__copy">
        <h2 className="product-section__title">{productName}</h2>
        <p className="product-section__description">{productDesription}</p>
        <div className="product-section__links">
          <a className="product-section__link" href={learnMore}>Learn More</a>
        </div>
      </div>
      <div className="product-section__image">
        <img src={imageURL} alt={`${productName} platform`} />
      </div>
    </section>
  );
};

export default RightSection;
