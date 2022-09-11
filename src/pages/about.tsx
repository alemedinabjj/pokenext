import Image from 'next/image'

import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h1>About</h1>
      <Image
        src="/assets/pokeball.svg"
        alt="pokeball"
        width={100}
        height={100}
      />

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        voluptatum quos quidem natus quas. Quisquam, quae. Quisquam, quae.
        
      </p>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        voluptatum quos quidem natus quas. Quisquam, quae. Quisquam, quae.

      </p>


    </div>
  )
}

export default About