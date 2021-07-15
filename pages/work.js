import Head from 'next/head'

import FeaturedProject from '@components/FeaturedProject'
import OtherProject from '@components/OtherProject'
import Experience from '@components/Experience'
import { getProjects } from '@libs/project'
import { getJobs } from '@libs/job'
import { sortByDate } from '@libs/utils'

const Work = ({ jobs, featured, other }) => {
	return (
		<>
			<Head>
				<title>Work - Natiq Mumtaz</title>
			</Head>
			<h1 className="text-3xl font-bold mb-4">Where I&apos;ve worked</h1>

			{/* experience */}
			<section>
				{jobs.map((job) => (
					<Experience key={job.data.title} job={job} />
				))}
			</section>

			{/* featured projects */}
			<section>
				<h2 className="text-xl font-bold mb-4 mt-12">Some things I&apos;ve built</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:grid-cols-3">
					{featured.map((project) => (
						<FeaturedProject key={project.data.title} project={project} />
					))}
				</div>
			</section>

			{/* other projects */}
			<section>
				<h2 className="text-xl font-bold my-4 mt-12">Other amazing projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:grid-cols-3">
					{other.map((project) => (
						<OtherProject key={project.data.title} project={project} />
					))}
				</div>
			</section>
		</>
	)
}

export const getStaticProps = async () => {
	const jobs = await getJobs()
	const projects = await getProjects()

	return {
		props: {
			jobs: jobs.sort((a, b) => sortByDate(a.data, b.data)),
			featured: projects.filter((project) => project.data.featured),
			other: projects.filter((project) => !project.data.featured),
		},
	}
}

export default Work
