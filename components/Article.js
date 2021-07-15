import Link from 'next/link'
import { localStringDate } from '@libs/utils'

const Article = ({ article }) => {
	const { title, description, date, slug } = article

	return (
		<article className="border shadow-sm py-6 px-5 rounded-md">
			<h2 className="text-xl font-bold">{title}</h2>
			<p className="italic text-xs text-gray-600 mb-2">{localStringDate(date)}</p>
			<p className="text-gray-600 mb-3">{description}</p>
			<Link href={`/mems/${slug}`}>
				<a className="hover:text-blue-700 transition">Read this article →</a>
			</Link>
		</article>
	)
}

export default Article
