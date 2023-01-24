import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')

        }, 3000)
    }, [])
    return (
        <div>
            <h1>Page not found</h1>
        </div>
    );
}

export default NotFound;