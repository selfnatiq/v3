import marked from 'marked'
import { FiExternalLink } from 'react-icons/fi'
import { VscGithubInverted } from 'react-icons/vsc'

const OtherProject = ({ project }) => {
	const { data, content } = project

	return (
		<section className="border shadow-sm py-6 px-5 rounded-md">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">{data.title}</h2>
				{data.github && (
					<div className="flex gap-2">
						<a href={data.github} className="hover:text-blue-700 transition">
							<VscGithubInverted size="1.3em" />
						</a>
						<a href={data.external} className="hover:text-blue-700 transition">
							<FiExternalLink size="1.3em" />
						</a>
					</div>
				)}
			</div>

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
		</section>
	)
}

export default OtherProject
