import { PropsWithChildren, useEffect } from 'react'
import { useRef } from 'react'

import LogoMenu from './components/LogoMenu'
import CartList from './components/CartList'
import Avatar from './components/Avatar'
import Cart from './components/Cart'
import { isMobileDevice } from '@/composable/useUtils'

interface NavbarProps extends PropsWithChildren {
	count: number
	navList: string[]
	cartItems: Partial<Record<string, string | number>[]> | unknown
	removeCartItem: (num: number) => void
}

const Navbar = ({...props}: NavbarProps) => {
	const { count, navList, cartItems, removeCartItem } = props
	const cartListRef = useRef(null)

	const onCartClick = () => {
		if(isMobileDevice()) {
			const cartList = cartListRef.current as unknown as HTMLDivElement | any
			cartList.classList.remove('hidden')
			cartList.classList.add('fixed')
		}
	}

	const onCloseCartList = () => {
		if(isMobileDevice()) {
			const cartList = cartListRef.current as unknown as HTMLDivElement | any
			cartList.classList.remove('fixed')
			cartList.classList.add('hidden')
		}
	}

	useEffect(() => {
		if(!(cartItems as Record<string, string | number>[]).length) {
			onCloseCartList()
		} else {
			onCartClick()
		}
	}, [cartItems])

	return (
		<header className='fixed top-0 w-screen h-[120px] bg-white z-[999]'>
			<nav className={`relative w-11/12 h-[120px] mx-auto flex justify-between lg:border-b lg:border-[#ddd] xl:w-9/12`}>
				<LogoMenu navList={navList}/>
				{/* right cart and avatar */}
				<div className='relative car-block flex items-center cursor-pointer group'>
					<Cart
						count={count}
						onCartClick={() => onCartClick()}
					/>
					<Avatar />
					<CartList
						ref={cartListRef}
						count={count}
						items={cartItems}
						onremoveCartItem={() => removeCartItem(count)}
						onClose={onCloseCartList}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Navbar