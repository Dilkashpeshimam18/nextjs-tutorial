import styles from '@/styles/About.module.css'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>Next Tutorial | About </title>

            </Head>
            <div className={styles.about}>
                <h1>About</h1>
                <p>This is about page</p>
            </div>
        </>

    )
}
export default About