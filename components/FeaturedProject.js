import Link from 'next/link'
import marked from 'marked'

const FeaturedProject = ({ project }) => {
	const { data, content } = project

	return (
		<section className="border shadow-sm py-6 px-5 rounded-md">
			<span className="text-xs">Featured Project</span>
			<h2 className="text-2xl font-bold">{data.title}</h2>

			<div
				className="my-3 prose lg:prose-lg 2xl:prose-xl"
				dangerouslySetInnerHTML={{ __html: marked(content) }}
			/>

			<div className="space-x-4 font-semibold text-blue-700">
				{data.tech.map((t) => (
					<span className="font-mono text-sm" key={t}>
						{t}
					</span>
				))}
			</div>

			<div className="mt-3 flex gap-1">
				<a href="#" className="hover:text-blue-700">
					G
				</a>

				<a href="#" className="hover:text-blue-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
						<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
					</svg>
				</a>
			</div>
		</section>
	)
}

export default FeaturedProject