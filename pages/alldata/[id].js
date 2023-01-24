
export const getStaticPath = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map((res) => {
        return {
            params: { id: res.id.toString() }
        }
    })

    return {
        paths,
        fallbacks: false
    }
}

const Details = () => {
    return (
        <div>
            <h1>User Detail</h1>
        </div>
    );
}

export default Details;