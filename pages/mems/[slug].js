import Link from 'next/link'

import marked from 'marked'
import { getArticles, getArticle } from '@libs/article'
import { localStringDate } from '@libs/utils'

const Mem = ({ article }) => {
	const { data, content } = article
	return (
		<article>
			<Link href="/mems">
				<a className="hover:text-blue-700 transition">← All Memories</a>
			</Link>
			<header className="py-10">
				<h1 className="text-3xl font-bold">{data.title}</h1>
				<div className="italic text-sm text-blue-600">
					<span>{localStringDate(data.date)}</span>
					<span>&nbsp;-&nbsp;</span>
					<span>{data.tags.map((tag) => `#${tag}`).join('\t')}</span>
				</div>
			</header>
			<main
				className="prose lg:prose-lg 2xl:prose-xl"
				dangerouslySetInnerHTML={{ __html: marked(content) }}
			/>
		</article>
	)
}

export const getStaticPaths = async () => {
	let articles = await getArticles()
	articles = articles.filter((article) => !article.draft)

	const paths = articles.map((article) => ({
		params: {
			slug: article.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const article = await getArticle(params.slug)

	return {
		props: {
			article,
		},
	}
}

export default Mem
