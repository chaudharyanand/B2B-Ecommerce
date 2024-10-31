import { useSelector } from "react-redux";
import { selectCurrencySymbol } from "../../features/cart/cart-slice";

const Price = ({ price, textSize, symbolAtEnd, isNegative }: any) => {
  const currency = useSelector(selectCurrencySymbol);

  const currencyTag = <span className={textSize}>{currency}</span>;
  const priceTag = (
    <span className={textSize}>
      {`${isNegative && price !== 0.0 ? "-" : ""}`}
      {parseFloat(price).toFixed(2)}
    </span>
  );

  if (symbolAtEnd)
    return (
      <>
        {priceTag}
        <span className="ml-1">{currencyTag}</span>
      </>
    );

  return (
    <>
      {currencyTag}
      <span className="ml-1">{priceTag}</span>
    </>
  );
};

export default Price;
