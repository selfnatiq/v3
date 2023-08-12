import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavMobile from './NavMobile'

const paths = [
	{ name: 'Work', href: '/work' },
	{ name: 'Mems', href: '/mems' },
]

const Header = () => {
	return (
		<header className="flex justify-between items-center">
			<Link href="/">
				<a className="flex items-center gap-4">
					<Image
						className="rounded-full"
						src="/natiq-white-bg.png"
						height={50}
						width={50}
						layout="fixed"
						alt="Natiq Mumtaz"
					/>
					<span className="text-xl font-semibold">Natiq Mumtaz</span>
				</a>
			</Link>

			{/* mobile & mini pads */}
			<div className="block lg:hidden">
				<NavMobile paths={paths} />
			</div>

			{/* laptop & lg screens */}
			<nav className="hidden lg:flex gap-10">
				{paths.map((path) => (
					<Link key={path.name} href={path.href}>
						<a className="text-lg font-bold text-gray-900 hover:text-blue-700 transition">
							{path.name}
						</a>
					</Link>
				))}
			</nav>
		</header>
	)
}

export default Header
