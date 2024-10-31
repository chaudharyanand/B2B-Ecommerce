import React from 'react'
import Hero from '../hero/Hero'
import TopCategory from '../top-category/TopCategory'

const LandingScreen = ({home,}:any) => {
  return (
    <>
			<div className="">
				<div className="flex">
					{/* <TopCategory home={home} /> */}
					<Hero home={home} />
				</div>
			</div>
    </>
  )
}

export default LandingScreen