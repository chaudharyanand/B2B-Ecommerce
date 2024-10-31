import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDollarSign, faHeadphones, faMagnifyingGlass, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WebFeatures = () => {
	return (
		<>
			<div className="bg-white ml-[90px] mr-[90px] mb-[25px] mt-[27px]">
				<div className="max-w-fullscreen mx-auto px-4">
					<div className="overflow-x-auto">
						<div className="inline-flex lg:grid grid-cols-1 xs:grid-cols-1 xs:gap-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center bg-webfeaturesbgcolor p-4 w-[1260px] h-[69px] ">
							<div className="w-64 ">
								<div className="flex items-center justify-center">
									<FontAwesomeIcon icon={faTruck} className="text-4xl w-14" />
									<div className="flex flex-col ml-4 xs:w-">
										<div className="text-themetextcolor text-1xl font-black">
											Free Delievery
										</div>
										<div className="text-webfeaturessecondarytext text-sm">
											Order from all item
										</div>
									</div>
								</div>
							</div>
							<div className="w-64">
								<div className="flex items-center justify-center">
									<FontAwesomeIcon icon={faDollarSign} className="text-4xl w-14" />
									<div className="flex flex-col ml-4">
										<div className="text-themetextcolor text-sm text-1xl font-black">
											Return & Refund
										</div>
										<div className="text-webfeaturessecondarytext text-sm">
											Money Back Guarantee
										</div>
									</div>
								</div>
							</div>
							<div className="w-64">
								<div className="flex items-center justify-center">
									<FontAwesomeIcon icon={faHeadphones} className="text-4xl w-14" />
									<div className="flex flex-col ml-4">
										<div className="text-themetextcolor text-1xl font-black">
											Quality Support
										</div>
										<div className="text-webfeaturessecondarytext text-sm">
											Alway Online 24/7
										</div>
									</div>
								</div>
							</div>
							<div className="w-64">
								<div className="flex items-center justify-center">
									<FontAwesomeIcon icon={faEnvelope} className="text-4xl w-14" />
									<div className="flex flex-col ml-4">
										<div className="text-themetextcolor text-1xl font-black">
											Join Newsletter
										</div>
										<div className="text-webfeaturessecondarytext text-sm">
											20% Off By Subscribing
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WebFeatures