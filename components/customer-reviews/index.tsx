import Carousel, { ButtonOne, ButtonTwo, ButtonThree } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomerFeedback from "../customer-feedback";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import next from "next";


const CustomerReviews = () => {
  const reviews = useSelector(selectAllProducts);



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="border  md:-ml-[45px] w-[230px] h-[334]  flex flex-col bottom-4  mt-[33px] mb-6">
        <div className="text-[20px] font-black pt-12 border-b border-gray-300">
          <p>
            <span>Customer</span> <span className="text-themecolor">Reviews</span>
          </p>

        </div>
        <div className="w-full h-[340px]">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
          >
            {
              reviews && reviews.map((reviewData) => (
                <CustomerFeedback reviewData={reviewData} />
              ))
            }
          </Carousel>
        </div>








        {/* <div className="">
          <CustomerReviews />
          <CustomerReviews />
          <CustomerReviews />
        </div> */}
        {/* <div className=" w-60 h-80  mt-2  justify-center">
          <span className=" flex justify-center mt-4">hello</span>
          <h2 className="flex justify-center mt-4 font-black">"Friendly Support"</h2>
          <p className="flex justify-center mt-4">
            span Lorem ipsum is simply  <br /> dummy text  of the printing <br /> and typesetting industry.<br /> </p>
          <b className="flex justify-center pt-2">Kelan Parker</b>
          <div className="flex justify-center pt-2">
            <ReactStars
              count={5}
              value={4}
              size={20}
              activeColor="#ffd700"
              color="#eaeaea"
              isHalf={true}
              edit={false}
            />
          </div>
          <span className="flex justify-center ">
            <b className="text-4xl">.</b>
            <b className="text-green-700 text-4xl">.</b>
            <b className="text-green-700 text-4xl">.</b>
          </span>
        </div> */}
      </div>
    </>
  );
};

export default CustomerReviews;
