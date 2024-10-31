import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SpecialProducts from '../special-products';
import Product from '../../pages/products';
import FreshFood from '../fresh-food';
import CustomerReviews from '../customer-reviews';
import PureAndNatural from '../pure-and-natural';
import BigOffer from '../big-offer';

const AsideNav = ({ reviewsProps, imageLibary }: any) => {
	return (
		<div className='ml-12'>
			<PureAndNatural />
			<SpecialProducts />
			<CustomerReviews />
			<FreshFood />
			<SpecialProducts />
			<BigOffer />
		</div>
	)
}

export default AsideNav