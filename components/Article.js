import Link from 'next/link'
import { localStringDate } from '@libs/utils'
import { FiArrowRight } from 'react-icons/fi'

const Article = ({ article }) => {
	const { title, description, date, slug } = article

	return (
		<article className="border shadow-sm py-6 px-5 rounded-md">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="italic text-xs text-gray-600 mb-3">{localStringDate(date)}</p>
			<p className="text-gray-600 mb-3">{description}</p>
			<Link href={`/mems/${slug}`}>
				<a className="hover:text-blue-700 transition text-sm group flex items-center">
					Read this article&nbsp;
					<span className="transform group-hover:translate-x-1.5 transition-all inline-block">
						<FiArrowRight />
					</span>
				</a>
			</Link>
		</article>
	)
}

export default Article
