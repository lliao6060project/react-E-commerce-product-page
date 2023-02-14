import { PropsWithChildren } from "react"

import LogoMenu from "./components/LogoMenu"
import CartList from "../CartList"
import Avatar from "./components/Avatar"
import Cart from "./components/Cart"

interface NavbarProps extends PropsWithChildren {
	count: number
	navList: string[]
	outerSize: string
	removeItem: (num: number) => void
}

const Navbar = ({...props}: NavbarProps) => {
	const { count, navList, outerSize, removeItem } = props

	return (
		<header className="fixed top-0 w-screen h-[120px] bg-white z-[999]">
			<nav className={`${outerSize} w-11/12 relative h-[120px] mx-auto flex justify-between lg:border-b lg:border-[#ddd] xl:w-9/12`}>
				<LogoMenu navList={navList}/>
				{/* right cart and avatar */}
				<div className="relative car-block flex items-center cursor-pointer group">
					<Cart count={count} />
					<Avatar />
					<CartList
						count={count}
						onRemoveItem={() => removeItem(count)}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Navbar