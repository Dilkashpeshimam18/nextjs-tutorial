import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}

const AllData = ({ users }) => {
    return (
        <>
            <Head>
                <title>Next Tutorial | All User </title>

            </Head>
            <div><h1>All User</h1>
                <Image src='/img.png' width={200} height={200} />
                {users.map((user) => {
                    return (
                        <Link style={{ cursor: 'pointer' }} href={`alldata/${user.id}`} key={user.id}>
                            <h6>{user.name}</h6>
                            <p>{user.email}</p>
                        </Link>
                    )
                })}
            </div>
        </>

    )
}

export default AllData