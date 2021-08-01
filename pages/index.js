import Head from 'next/head'
import marked from 'marked'

import { getPage } from '@libs/page'

const Index = ({ page }) => (
	<div
		className="prose lg:prose-lg 2xl:prose-xl"
		dangerouslySetInnerHTML={{ __html: marked(page) }}
	/>
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
