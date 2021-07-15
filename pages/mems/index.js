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
				className="prose lg:prose-lg 2xl:prose-xl mb-5"
				dangerouslySetInnerHTML={{ __html: marked(page) }}
			/>

			<section>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:grid-cols-3">
					{articles.map((article) => (
						<Article key={article.slug} article={article} />
					))}
				</div>
			</section>
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
