
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map((res) => {
        return {
            params: { id: res.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users' + id)
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}
const Details = ({ user }) => {
    return (
        <div>
            <h1>User Detail</h1>
            <p>{user?.name}</p>
        </div>
    );
}

export default Details;