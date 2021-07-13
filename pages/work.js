import Head from 'next/head'
import Link from 'next/link'

const Work = () => {
	return (
		<>
			<Head>
				<title>Work - Natiq Mumtaz</title>
			</Head>

			<h1 className="text-2xl font-bold mb-4">Some things I&apos;ve built</h1>

			<section className="border shadow-sm py-6 px-5 rounded-md">
				<span className="text-xs">Featured Project</span>
				<h2 className="text-2xl font-bold">OctoProfile</h2>

				<p className="my-5 font-light">
					A nicer look at your GitHub profile and repository stats with data
					visualizations of your top languages and stars. Sort through your top repos by
					number of stars, forks, and size.
				</p>

				<div className="space-x-4">
					<span className="font-mono text-sm">Next.js</span>
					<span className="font-mono text-sm">Chart.js</span>
				</div>

				<div className="mt-3 space-x-4">
					<Link href="#">GitHub</Link>
					<Link href="#">Web</Link>
				</div>
			</section>
		</>
	)
}

export default Work
