import type { AppDispatch, AppState } from '@/store/store'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, addProdToCart, removeCartItem } from '@/store/cart'

import Navbar from './navbar'
import TopBlock from './top-block';
import ContentBlock from './content-block';
import { toast } from 'react-toastify';

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

const ECommerce = ({...props}) => {
	const dispatch: AppDispatch = useDispatch();
	const {
		count,
		cartCount,
		currentProduct,
		cartList
	} = useSelector((state: AppState) => state.cartSlice)

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch])

	return (
		<div className='layout mx-auto h-screen flex flex-col'>
			<Navbar
				count={cartCount}
				navList={navList}
				cartItems={cartList}
				onRemoveCartItem={() => dispatch(removeCartItem())}
			/>

			<main className={`lg:w-10/12 flex-auto mx-auto`}>
				<TopBlock
					count={count}
					product={product}
					onAddProdToCartClick={
						() => count >= 1
							? dispatch(addProdToCart(toCartProduct(count)))
							: toast.error('count cannot be less than zero!', {
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

export default ECommerce
