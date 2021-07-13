import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const paths = [
	{ name: 'Work', href: '/work' },
	{ name: 'Mems', href: '/mems' },
]

const Header = () => {
	const [isOpen, setOpen] = useState(false)

	const toggle = () => setOpen((p) => !p)

	return (
		<header className="flex justify-between items-center">
			<Link href="/">
				<a onClick={() => setOpen(false)} className="flex items-center gap-4">
					<Image
						className="rounded-full"
						src="/me.jpg"
						height={50}
						width={50}
						layout="fixed"
						alt="Natiq Mumtaz"
					/>
					<span className="text-xl font-semibold">Natiq Mumtaz</span>
				</a>
			</Link>

			<div>
				<button onClick={toggle}>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					)}
				</button>

				{isOpen && (
					<nav className="absolute bg-white left-3 top-20 bottom-3 right-3 flex flex-col p-7">
						{paths.map((path) => (
							<Link key={path.name} href={path.href}>
								<a
									onClick={toggle}
									className="p-2 text-lg font-bold block text-gray-700 hover:text-blue-900 transition"
								>
									{path.name}
								</a>
							</Link>
						))}
					</nav>
				)}
			</div>
		</header>
	)
}

export default Header
