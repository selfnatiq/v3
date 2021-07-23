import Head from 'next/head'
import '@styles/global.css'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	// add target _blank to external links
	useEffect(() => {
		const links = [...document.links]

		links.forEach((link) => {
			if (link.hostname !== location.hostname) {
				link.target = '_blank'
			}
		})
	})

	return (
		<>
			{/* Todo: changes in head must be done */}
			<Head>
				<title>Natiq Mumtaz</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
				/>
				<meta
					property="og:title"
					content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
				/>
				<meta
					property="og:description"
					content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
				/>
				<meta property="og:url" content="https://snipcart.com/" />
				<meta property="og:type" content="website" />

				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>

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
