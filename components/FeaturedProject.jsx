import Image from 'next/image'
import styles from '@styles/FeaturedProject.module.css'

const FeaturedProject = ({ image, name, desc }) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt="Project"
                    width={500}
                    height={300}
                />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export default FeaturedProject
