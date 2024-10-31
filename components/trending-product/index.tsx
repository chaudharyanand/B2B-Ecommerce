import { useSelector } from "react-redux";
import { selectCurrencySymbol } from "../../features/cart/cart-slice";
import Price from "../price/Price";
import ReactStars from "react-rating-stars-component";
const TrendingProduct = ({ product }: any) => {




  return (
    <>
      <div
        className=" 
          s-mobile:w-[220px] s-mobile:h-[280px] s-mobile:-ml-1
          m-mobile:w-[300px] m-mobile:h-[340px]
          l-mobile:w-[350px] l-mobile:h-[340px]
          md:w-[450px] md:h-[300px] 
          lg:w-[730px] lg:h-[320px]   lg:-mt-2
          xlg:w-[1004px] xlg:h-[400px] 
        "
      >
        <a
          href={`/products?id=${product.id}`}
          key={`${product.id}`}
          className=""
        >
          <div className=" main---container->
        s-mobile:w-[150px] s-mobile:h-[320px] s-mobile:mt-4 s-mobile:ml-2
        m-mobile:w-[160px] m-mobile:h-[320px]  m-mobile:ml-4
        l-mobile:w-[170px] l-mobile:h-[320px]
        md:w-[135px] md:h-[300px] 
        lg:w-[140px] lg:h-[300px] lg:-mt-2
        xlg:w-[251px] xlg:h-[300px] xlg:pt-6
          flex flex-col   ">
            <div className="
             s-mobile:w-[100px] s-mobile:h-[150px]
             md:w-[120px] md:h-[300px] 
             lg:w-[190px] lg:h-[300px] lg:mt-2 lg:-ml-4
             xlg:w-[251px] xlg:h-[200px] 
            ">
              <img
                className="
                s-mobile:w-[100px] s-mobile:h-[150px]
                md:w-[120px] md:h-[160px] 
                 lg:w-[140px] lg:h-[190px] lg:mt-10
                xlg:w-[191px] xlg:h-[200px] xlg:mt-[60px] xlg:ml-4

                "
                src={
                  product.mainImage
                    ? process.env.NEXT_PUBLIC_BASE_URL +
                    product.mainImage.original
                    : ""
                }
                alt={product.slug} />
            </div>
            <div className="flex flex-col mx-auto text-black 
            s-mobile:text-[11px] s-mobile:ml-[10px] xlg:ml-[50px] xlg:mt-[80px]
            l-mobile:text-[14px] md:-mt-[120px] lg:mt-1
            ">
              <span className="text-xl font-medium s-mobile:text-[14px]">{product.name}</span>
              <span className="text-xl text-800 ">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  activeColor="#ffd700"
                  color="#eaeaea"
                  isHalf={true}
                  edit={false}
                />
              </span>
              <div className="flex">
                <span className="text-1xl text-black font-black "><Price price={product.price} symbolAtEnd={true} /></span>
                <span className='line-through pl-2'>$80.00 USD</span>
              </div>

            </div>
          </div>

        </a>
      </div>

    </>
  );
};

export default TrendingProduct;
