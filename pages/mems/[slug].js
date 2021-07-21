import Link from 'next/link'

import marked from 'marked'
import { getArticles, getArticle } from '@libs/article'
import { localStringDate } from '@libs/utils'
import { FiArrowLeft } from 'react-icons/fi'
import Head from 'next/head'

const Mem = ({ article }) => {
	const { data, content } = article

	return (
		<>
			<Head>
				<title>{data.title} - Natiq Mumtaz</title>
			</Head>
			<article>
				<Link href="/mems">
					<a className="hover:text-blue-700 transition flex items-center group gap-1">
						<span className="transform group-hover:-translate-x-1.5 transition-all inline-block">
							<FiArrowLeft />
						</span>
						All Memories
					</a>
				</Link>
				<header className="py-10">
					<h1 className="text-4xl font-bold mb-2 2xl:mb-4 2xl:text-5xl">{data.title}</h1>
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
		</>
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
