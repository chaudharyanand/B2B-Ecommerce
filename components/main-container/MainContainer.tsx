import React from 'react'
import FeaturedProducts from '../featured-products'
import FreshFood from '../fresh-food'
import FreshVegetables from '../fresh-vegetables'
import LimitedQuantity from '../limited-quantities'
import LinkImages from '../link-images/LinkImages'
import NewCustomerOffer from '../new-customer-offer'
import News from '../news'
import Promo from '../promo/Promo'

const MainContainer = ({ home }: any) => {
	return (
		<>
			<div className="w-full">
				<LinkImages />
				<FeaturedProducts
					home={home}
				/>
				<NewCustomerOffer />
				<Promo
					home={home}
				/>
				<LimitedQuantity />
				<FreshVegetables />
				<News />
			</div>
		</>
	)
}

export default MainContainer