import { PropsWithChildren } from "react"
import LogoMenu from "./components/LogoMenu"
import CartList from "../cart/components/CartList"
import Avatar from "./components/Avatar"
import Cart from "../cart/index"

interface Navbar extends PropsWithChildren {
	navList: string[]
	outerSize: string
}

const Navbar = ({...props}: Navbar) => {
	const { navList, outerSize } = props
	return (
		<header className="fixed top-0 w-screen h-[120px] bg-white z-[999]">
			<nav className={`${outerSize} w-11/12 relative h-[120px] mx-auto flex justify-between border-b border-[#ddd]`}>
				<LogoMenu navList={navList}/>
				{/* right cart and avatar */}
				<div className="relative car-block flex items-center cursor-pointer group">
					<Cart />
					<Avatar />
					<div className="hidden xl:block">
						<CartList />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
