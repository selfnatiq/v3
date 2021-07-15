import Head from 'next/head'
import marked from 'marked'

import Article from '@components/Article'
import { getArticles } from '@libs/article'
import { sortByDate } from '@libs/utils'
import { getPage } from '@libs/page'

const Mems = ({ page, articles }) => {
	return (
		<>
			<Head>
				<title>Mems - Natiq Mumtaz</title>
			</Head>

			<div
				className="prose lg:prose-lg 2xl:prose-xl"
				dangerouslySetInnerHTML={{ __html: marked(page) }}
			/>

			{articles.map((article) => (
				<Article key={article.slug} article={article} />
			))}
		</>
	)
}

export const getStaticProps = async () => {
	const page = await getPage('mems')
	const articles = await getArticles()

	return {
		props: {
			page,
			articles: articles.filter((article) => !article.draft).sort((a, b) => sortByDate(a, b)),
		},
	}
}

export default Mems
