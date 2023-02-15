import type { PropsWithChildren } from 'react'
import { connect } from 'react-redux';
import { removeCartItem, addProdToCart } from '@/store/cart/actions'

import Navbar from './navbar'
import TopBlock from './top-block';
import ContentBlock from './content-block';

interface ECommerceProps extends PropsWithChildren {
	count: number
	cartCount: number
	cartItems: Partial<Record<string, string | number>[]> | unknown
	removeCartItem: (num: number) => void
	addProdToCart: (product: Record<string, number | string>) => void
}

const navList: string[] = [
	'Collections',
	'Men',
	'Women',
	'About',
	'Contact'
]

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
		addProdToCart
	} = props

	return (
		<div className='layout mx-auto h-screen flex flex-col'>
			<Navbar
				count={cartCount}
				navList={navList}
				cartItems={cartItems}
				removeCartItem={removeCartItem}
			/>

			<main className={`lg:w-10/12 flex-auto mx-auto`}>
				<TopBlock
					count={count}
					product={product}
					onaddProdToCartClick={() => count >= 1 ? addProdToCart(toCartProduct(count)) : ''}
				/>

				<div className='w-11/12 mx-auto xl:w-10/12'>
					<ContentBlock list={navList}/>
				</div>
			</main>

			<footer className='flex-center h-[120px] shrink-0 bg-tritanomaly text-white'>footer</footer>
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
	addProdToCart: (product: Record<string, number | string>) => dispatch(addProdToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ECommerce);
