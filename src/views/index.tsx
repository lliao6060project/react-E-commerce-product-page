import {
	featchAddProdToCart,
	featchRemoveProdFromCart,
	fetchCartList,
	fetchProduct
} from '@/store/cart';
import type { AppDispatch, AppState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageUrl } from '@/composable/useImageUrl';
import { toast } from 'react-toastify';
import ContentBlock from './content-block';
import Navbar from './navbar';
import TopBlock from './top-block';
import { CartItem } from '@/common/types';

const navList: string[] = [
	'Collections',
	'Men',
	'Women',
	'About',
	'Contact'
]

const ECommerce = () => {
	const dispatch: AppDispatch = useDispatch();
	const {
		count,
		cartCount,
		currentProduct,
		cartList
	} = useSelector((state: AppState) => state.cartSlice)

	const handleAddToCart = () => {
		const { name, price } = currentProduct
		const addItem = {
			id: '123-45-6789',
			name: name,
			price: price?.discount,
			amount: count,
			image_url: getImageUrl('image-product-1-thumbnail.jpg'),
		}
		dispatch(featchAddProdToCart(addItem))
	}

	const handleDelProd = (id: number) => {
		const target = cartList.find((item) => item.id === `${id}`)
		dispatch(featchRemoveProdFromCart(target as CartItem))
	}


  useEffect(() => {
    const loadCatalogsAsync = async() => {
      try {
        await dispatch(fetchProduct());
        await dispatch(fetchCartList());
        // ... and so on for all my catalogs
      } catch (e) {
        console.error(e);
      }
    }

    loadCatalogsAsync();
  }, [])


	return (
		<div className='layout mx-auto h-screen flex flex-col'>
			<Navbar
				count={cartCount}
				navList={navList}
				cartItems={cartList}
				onRemoveCartItem={(id) => handleDelProd(id)}
			/>

			<main className={`lg:w-10/12 flex-auto mx-auto`}>
				<TopBlock
					count={count}
					product={currentProduct}
					onAddProdToCartClick={
						() => count >= 1
							? handleAddToCart()
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
