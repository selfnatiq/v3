import marked from 'marked'

const Experience = ({ job }) => {
	const { data, content } = job

	return (
		<div className="mb-8">
			<p className="font-medium">
				{data.title}&nbsp;
				<a className="text-blue-700" target="_blank" href={data.url} rel="noreferrer">
					@ <span className="hover:underline">{data.company}</span>
				</a>
			</p>

			<span className="italic text-xs text-gray-700">{data.range}</span>
			<div
				className="prose lg:prose-lg 2xl:prose-xl"
				dangerouslySetInnerHTML={{ __html: marked(content) }}
			/>
		</div>
	)
}

export default Experience
