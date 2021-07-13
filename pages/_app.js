import Head from 'next/head'
import '@styles/global.css'

import Header from '@components/Header'

function MyApp({ Component, pageProps }) {
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

			<div className="p-7">
				<Header />
				<main className="mt-12">
					<Component {...pageProps} />
				</main>
			</div>
		</>
	)
}

export default MyApp
