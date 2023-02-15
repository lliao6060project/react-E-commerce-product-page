import type { PropsWithChildren } from 'react'
import React from 'react'
import { connect } from 'react-redux';
import { removeCartItem, addToCart } from '@/store/cart/actions'

import Navbar from './navbar'
import PhotoGallery from './top-block/PhotoGallery'
import ProductIntro from './top-block/ProductIntro'

interface ECommerceProps extends PropsWithChildren {
	count: number
	cartCount: number
	cartItems: Partial<Record<string, string | number>[]> | unknown
	removeCartItem: (num: number) => void
	addToCart: (product: Record<string, number | string>) => void
}

const navList: string[] = [
	'Collections',
	'Men',
	'Women',
	'About',
	'Contact'
]

const layoutOuterSize = `w-full lg:w-10/12`

const product = {
	subTitle: 'SNEAKER COMPANY',
	title: 'Fall Limited Edition Sneakers',
	desc: `
		These low-profile sneakers are your perfect casual wear companion.
		Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.
	`,
	price: 250,
	discount: 50,
}

const toCartProduct = (count: number) => {
	return {
		title: product.title,
		price: (product.price * (product.discount / 100)),
		totalPrice: (product.price * (product.discount / 100)) * count
	}
}

const ECommerce = ({...props}: ECommerceProps) => {
	const {
		count,
		cartCount,
		cartItems,
		removeCartItem,
		addToCart
	} = props
	return (
		<div className='layout mx-auto h-screen flex flex-col'>
			<Navbar
				count={cartCount}
				navList={navList}
				outerSize={layoutOuterSize}
				cartItems={cartItems}
				removeCartItem={removeCartItem}
			/>
			<main className={`${layoutOuterSize} flex-auto mx-auto`}>
				<div className='
					w-full
					mx-auto
					grid
					grid-cols-1
					lg:w-11/12
					lg:grid-cols-2
					lg:gap-20
					lg:mb-24
					xl:gap-24
					xl:w-10/12
				'>
					<PhotoGallery />
					<ProductIntro
						count={count}
						product={product}
						onAddToCartClick={() => count >= 1 ? addToCart(toCartProduct(count)) : ''}
					/>
				</div>
				{
					navList.map((item, i) => {
						return (
							<React.Fragment key={`${item}-${i}`}>
								<section
									id={`block-${item}`}
									className='w-11/12 xl:w-10/12 mx-auto min-h-screen text-justify py-3 scroll-mt-[120px]'
								>
									<h3 className='text-2xl bold py-4 font-bold'>{item} Block</h3>
									<p className='leading-relaxed'>
										Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.

										In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.
									</p>
								</section>
								<br />
							</React.Fragment>
						)
					})
				}
			</main>
			<footer className='flex-center h-[120px] shrink-0 bg-red-400'>footer</footer>
		</div>
	)
}

const mapStateToProps = (state: Record<string, number>) => ({
	count: state.count,
  cartCount: state.cartCount,
	cartItems: state.cartItems
});

const mapDispatchToProps = (dispatch: any) => ({
  removeCartItem: (num: number) => dispatch(removeCartItem(num)),
	addToCart: (product: Record<string, number | string>) => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ECommerce);
