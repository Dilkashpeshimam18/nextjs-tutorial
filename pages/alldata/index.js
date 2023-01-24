import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const AllData = () => {
    return (
        <>
            <Head>
                <title>Next Tutorial | All Data </title>

            </Head>
            <div><h1>All data</h1>
                <Image src='/img.png' width={200} height={200} />
            </div>
        </>

    )
}

export default AllData