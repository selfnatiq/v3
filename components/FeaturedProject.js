import Link from 'next/link'
import marked from 'marked'
import { VscGithubInverted } from 'react-icons/vsc'
import { FiExternalLink } from 'react-icons/fi'

const FeaturedProject = ({ project }) => {
	const { data, content } = project

	return (
		<section className="border shadow-sm py-6 px-5 rounded-md">
			<span className="text-xs">Featured Project</span>
			<h2 className="text-2xl font-semibold">{data.title}</h2>

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

			<div className="mt-3 flex gap-2">
				<a href="#" className="hover:text-blue-700">
					<VscGithubInverted size="1.3em" />
				</a>

				<a href="#" className="hover:text-blue-700">
					<FiExternalLink size="1.3em" />
				</a>
			</div>
		</section>
	)
}

export default FeaturedProject
