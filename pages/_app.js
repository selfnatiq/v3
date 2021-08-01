import { useEffect } from 'react'

import '@styles/global.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

function MyApp({ Component, pageProps }) {
	// add target _blank to external links
	useEffect(() => {
		const links = [...document.links]

		links.forEach((link) => {
			if (link.hostname !== location.hostname) {
				link.target = '_blank'
				link.rel = 'noreferrer'
			}
		})
	})

	return (
		<>
			<div className="min-h-screen p-5 sm:p-8 lg:p-10 2xl:p-12">
				<Header />
				<main className="mt-12 container max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
					<Component {...pageProps} />
				</main>
			</div>
			<Footer />
		</>
	)
}

export default MyApp
