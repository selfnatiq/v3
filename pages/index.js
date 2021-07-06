import FeaturedProject from '@components/FeaturedProject'
import styles from '@styles/Index.module.css'

const Index = () => {
	return (
		<section>
			<h1 className={styles.heading}>
				I’m Natiq Mumtaz, a design-minded web developer focused on building beautiful
				interfaces & experiences
			</h1>
			<div>
				<h2 className={styles.featured}>Featured Projects</h2>
				<FeaturedProject
					image="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
					name="Monty"
					desc="Monty aims at shaping the future of customer experience 
					monitoring, by organising Swisscom’s information and 
					making it accessible and useful to better understand 
					and serve our customers."
				/>
			</div>
		</section>
	)
}

export default Index
