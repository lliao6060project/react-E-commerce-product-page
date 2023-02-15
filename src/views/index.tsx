import type { PropsWithChildren } from 'react'
import type { CartItem, CartState } from '@/common/types'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeCartItem, addProdToCart } from '@/store/cart/actions'

import Navbar from './navbar'
import TopBlock from './top-block';
import ContentBlock from './content-block';
import { toast } from 'react-toastify';

import useProductDetail from '@/hooks/useProductDetail';

interface ECommerceProps extends PropsWithChildren {
	count: number
	cartCount: number
	cartItems: Partial<CartItem[]> | unknown
	removeCartItem: (num: number) => void
	addProdToCart: (product: CartItem) => void
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
	const { title, price, discount } = product
	return {
		title: title,
		price: (price * (discount / 100)),
		totalPrice: (price * (discount / 100)) * count
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

	const [detail, { loading, fetchProductDetail }] = useProductDetail();

	useEffect(() => {
		fetchProductDetail();
	}, []);

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
					onAddProdToCartClick={() => count >= 1 ? addProdToCart(toCartProduct(count)) : toast.error('count cannot be less than zero!', {
						position: 'top-center',
					})}
				/>

				<div className='w-11/12 mx-auto xl:w-10/12'>
					<ContentBlock list={navList} />
				</div>
			</main>

			<footer className='flex-center h-[120px] shrink-0 bg-tritanomaly text-white'>footer</footer>
		</div>
	)
}

// redux
const mapStateToProps = (state: CartState) => ({
	count: state.count,
  cartCount: state.cartCount,
	cartItems: state.cartItems
});

const mapDispatchToProps = (dispatch: any) => ({
  removeCartItem: (num: number) => dispatch(removeCartItem(num)),
	addProdToCart: (product: CartItem) => dispatch(addProdToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ECommerce);
