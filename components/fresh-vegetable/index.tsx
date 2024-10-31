import Price from "../price/Price";
import ReactStars from "react-rating-stars-component";
const FreshVegetable = ({ product }: any) => {

  return (
    <>
      {/* <div className="  w-56 h-[340px] flex flex-col gap-3 mx-auto ">
        <div className="">
          <img
            className="w-full  h-56 "
            src={
              product.mainImage
                ? process.env.NEXT_PUBLIC_BASE_URL +
                product.mainImage.original
                : ""
            }
            alt={product.slug} />
          <div className="flex flex-col ml-10 text-black">
            <span className="text-xl text-800 pl-7">{product.name}</span>
            <span className="text-xl text-800 pl-7">
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
              <span className="text-1xl text-black font-black pl-7"><Price price={product.price} symbolAtEnd={true} /></span>
              <span className='line-through pl-3'>$80.00 USD</span>
            </div>

          </div>  </div>

      </div> */}
      <div
        className=" lg:relative
          s-mobile:w-[220px] s-mobile:h-[340px] 
          m-mobile:w-[300px] m-mobile:h-[340px]
          l-mobile:w-[350px] l-mobile:h-[340px]
          md:w-[450px] md:h-[300px] 
          lg:w-[730px] lg:h-[300px]   lg:-mt-2
          xlg:w-[1004px] xlg:h-[300px]
        "
      >
        <a
          href={`/products?id=${product.id}`}
          key={`${product.id}`}
          className=""
        >
          <div className=" main---container-> 
        s-mobile:w-[150px] s-mobile:h-[320px] s-mobile:mt-4
        m-mobile:w-[160px] m-mobile:h-[320px]  m-mobile:ml-4
        l-mobile:w-[170px] l-mobile:h-[320px]
        md:w-[135px] md:h-[300px] 
        lg:w-[140px] lg:h-[300px] lg:-mt-2
        xlg:w-[251px] xlg:h-[300px] xlg:m-1
          flex flex-col   ">
            <div className="
             s-mobile:w-[100px] s-mobile:h-[150px] s-mobile:ml-2
             md:w-[120px] md:h-[300px] 
             lg:w-[190px] lg:h-[300px] lg:mt-2 lg:-ml-4
             xlg:w-[251px] xlg:h-[200px] 
            ">
              <img
                className="
                s-mobile:w-[100px] s-mobile:h-[150px]
                md:w-[120px] md:h-[160px] 
                 lg:w-[140px] lg:h-[190px] lg:mt-4
                xlg:w-[191px] xlg:h-[200px]  xlg:ml-4 xlg:mt-4

                "
                src={
                  product.mainImage
                    ? process.env.NEXT_PUBLIC_BASE_URL +
                    product.mainImage.original
                    : ""
                }
                alt={product.slug} />
            </div>
            <div className="flex flex-col mx-auto text-black lg:absolute 
            s-mobile:text-[11px] s-mobile:ml-[20px] s-mobile:mt-5 xlg:ml-[50px] xlg:mt-[240px]
            l-mobile:text-[14px] md:-mt-[120px] lg:mt-[240px]
            ">
              <span className="text-xl font-medium s-mobile:text-[14px] ">{product.name}</span>
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

export default FreshVegetable;
