import Link from 'next/link'
import marked from 'marked'
import { VscGithubInverted } from 'react-icons/vsc'
import { FiExternalLink } from 'react-icons/fi'

const FeaturedProject = ({ project }) => {
	const { data, content } = project

	return (
		<section className="border shadow-sm py-6 px-5 rounded-md">
			<span className="text-xs">Featured</span>
			<h2 className="text-xl lg:text-2xl font-semibold">{data.title}</h2>

			<div className="my-3 prose" dangerouslySetInnerHTML={{ __html: marked(content) }} />

			<div className="space-x-4 font-semibold text-blue-700">
				{data.tech.map((t) => (
					<span className="font-mono text-sm" key={t}>
						{t}
					</span>
				))}
			</div>

			{data.github || data.external ? (
				<div className="mt-3 flex gap-2">
					{data.github && (
						<a
							href={data.github}
							className="hover:text-blue-700 transition"
							aria-label="Github"
						>
							<VscGithubInverted size="1.3em" />
						</a>
					)}

					{data.external && (
						<a
							href={data.external}
							className="hover:text-blue-700 transition"
							aria-label="Website"
						>
							<FiExternalLink size="1.3em" />
						</a>
					)}
				</div>
			) : (
				<p className="mt-3 text-gray-500 italic text-sm">
					No links available, since this is an internal project.
				</p>
			)}
		</section>
	)
}

export default FeaturedProject
