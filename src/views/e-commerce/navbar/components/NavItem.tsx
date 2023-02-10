import type { PropsWithChildren } from 'react'
import { forwardRef } from "react"
import { Link } from 'react-scroll'
import { mobileDevice } from "@/composable/useUtils"


interface NavItemProps extends PropsWithChildren {
  onNavClick?: () => void
	navList: string[]
}


const NavItem = forwardRef<HTMLDivElement, NavItemProps>(({onNavClick, ...props}, ref) => {
	const { navList } = props

	const closeMenu = () => {
		const menuRef = (ref as unknown as HTMLDivElement | any)
		const closeMenuIcon: unknown = menuRef.current?.children[0]
		const showMenuClass = 'max-lg:translate-x-0';
		const closeMenuClass = 'max-lg:translate-x-[-100%]';

		(closeMenuIcon as HTMLElement).classList.remove('block');
		(closeMenuIcon as HTMLElement).classList.add('hidden')
		if(showMenuClass) {
			menuRef.current?.classList.remove(showMenuClass);
			menuRef.current?.classList.add(closeMenuClass);
			document.body.classList.remove('overflow-hidden');
		}
	}

  return (
		<div
			ref={ref}
			className='
			nav-item
			h-screen
			top-0
			left-[-10%]
			lg:w-auto
			lg:h-auto
			lg:static
			max-lg:absolute
			max-lg:flex-start
			max-lg:w-[110vw]
			max-lg:translate-x-[-100%]
			max-lg:bg-black/[.75]
			transition
			duration-700
			z-[999]
		'
		onClick={mobileDevice ? closeMenu : onNavClick}
		>
			<div
				className='close-icon absolute w-64 top-5 left-10 hidden z-10'
				onClick={closeMenu}
			>
				<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" className="evenodd"/></svg>
			</div>
			<ul
				className="
					px-10
					text-xl
					text-black
					lg:text-gray-500
					text-left
					lg:text-base
					lg:text-center
					lg:grid
					lg:grid-cols-5
					lg:gap-2
					lg:px-0
					xl:gap-5
					max-lg:bg-white
					max-lg:h-screen
					w-64
					lg:w-full
					lg:h-full
					max-lg:pt-16
			">
				{
					navList.map((navItem, i) => {
						return (
							<li
								key={`${navItem}-${i}`}
								className={`
									hover:text-gray-300
									cursor-pointer
									lg:h-full
									${mobileDevice ? 'w-50' : 'w-full'}
									max-xl:py-3
								`
								}
							>
								<Link
									activeClass="active fw-bold text-black border-b-4 border-tritanomaly lg:h-[120px]"
									to={`block-${navItem}`}
									offset={-100}
									spy={true}
									duration={500}
									className="w-full h-full lg:flex-center"
									onClick={mobileDevice ? closeMenu : onNavClick}
								>
									{navItem}
								</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
});

export default NavItem
