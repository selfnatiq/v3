import Head from 'next/head'
import marked from 'marked'

import { getPage } from '@libs/page'

const Index = ({ page }) => (
	<>
		{/* Todo: changes in head must be done */}
		<Head>
			<title>Natiq Mumtaz</title>

			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				name="description"
				content="Hi, I’m Natiq. I’m a software developer student living in Switzerland. I code (very cool) digital products and websites that help businesses empower and connect with their users."
			/>

			{/* og properties */}
			<meta property="og:title" content="Natiq Mumtaz - Web developer" />
			<meta property="og:url" content="https://v3.natiqmumtaz.com" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Natiq Mumtaz" />

			<meta
				name="keywords"
				content="Natiq, Mumtaz, Natiq Mumtaz, Web developer, Software Engineer, React, Javascript, HTML/CSS, PHP, Portfolio, Student, Web enthusiast, Natiq Khan"
			/>
			<meta
				property="og:description"
				content="Hi, I’m Natiq. I’m a software developer student living in Switzerland. I code (very cool) digital products and websites that help businesses empower and connect with their users."
			/>

			<link rel="icon" type="image/png" href="/favicon.png" />
		</Head>

		<div
			className="prose lg:prose-lg 2xl:prose-xl"
			dangerouslySetInnerHTML={{ __html: marked(page) }}
		/>
	</>
)

export const getStaticProps = async () => {
	const page = await getPage('index')

	return {
		props: {
			page,
		},
	}
}

export default Index
