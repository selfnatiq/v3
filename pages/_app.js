import { useEffect } from 'react'
import Head from 'next/head'

import '@styles/global.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import siteMeta from '@content/sitemeta.json'

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
			<Head>
				<title>Natiq Mumtaz</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={siteMeta.description} />
				<meta
					name="keywords"
					content="Natiq, Mumtaz, Natiq Mumtaz, Web developer, Software Engineer, React, Javascript, HTML/CSS, PHP, Portfolio, Student, Web enthusiast, Natiq Khan"
				/>

				{/* og properties */}
				<meta property="og:title" content={siteMeta.title} />
				<meta property="og:url" content={siteMeta.url} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={siteMeta.title} />
				<meta property="og:image" content={siteMeta.url + siteMeta.og} />
				<meta property="og:description" content={siteMeta.description} />
				<meta property="og:image:alt" content={siteMeta.title} />

				<meta name="twitter:title" content={siteMeta.title} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@selfnatiq" />
				<meta name="twitter:creator" content="@selfnatiq" />
				<meta name="twitter:description" content={siteMeta.description} />
				<meta name="twitter:image" content={siteMeta.url + siteMeta.og} />

				<meta property="fb:app_id" content="128287456084122" />
				<meta
					name="facebook-domain-verification"
					content="8314dvk6kdwz4egrkxcrto0mwi8ufo"
				/>

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
