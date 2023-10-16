"use client"

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
<div className="grow p-12 capitalize sm:p-48 text-2xl tracking-wider font-bold flex flex-col">
    this site is not safe for you. please stay in safezone
    <Link href="/">
    <button className='font-bold tracking-wider text-2xl border rounded bg-sky-400 capitalize pb-1 px-1 mt-3'>safezone</button>
    </Link>
</div>
  )
}

export default page