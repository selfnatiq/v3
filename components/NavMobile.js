import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiMenu } from 'react-icons/fi'
import { useRouter } from 'next/dist/client/router'

const cx = (...classes) => classes.filter(Boolean).join(' ')

const NavMobile = ({ paths }) => {
	const router = useRouter()

	const goToPath = (path) => {
		router.push(path)
	}
	return (
		<Menu as="nav" className="relative inline-block text-left">
			{({ open }) => (
				<>
					<div>
						<Menu.Button className="inline-flex justify-center w-full">
							<FiMenu size="2em" />
						</Menu.Button>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items
							static
							className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<div className="py-1">
								{paths.map((path) => (
									<Menu.Item key={path.href}>
										{({ active }) => (
											<a
												onClick={() => goToPath(path.href)}
												className={cx(
													active
														? 'bg-gray-100 text-blue-700'
														: 'text-gray-700',
													'block px-4 py-2 text-sm cursor-pointer'
												)}
											>
												{path.name}
											</a>
										)}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	)
}

export default NavMobile
