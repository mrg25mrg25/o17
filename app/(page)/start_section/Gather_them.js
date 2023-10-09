
import Link from 'next/link'
import React from 'react'



const Gather_them = () => {
  return (
   <>
   <div className='gather bg-rose-300 sm:p-24 sm:h-screen'>
        <div className='gather_in h-full bg-rose-500 text-white p-8'>
        <p>
        British American Tobacco plc (BAT) is a British multinational company that manufactures and sells cigarettes, tobacco and other nicotine products. The company, established in 1902, is headquartered in London, England. As of 2021, it is the largest tobacco company in the world based on net sales.[3]
        BAT has operations in around 180 countries, and its cigarette brands include Dunhill, Kent, Lucky Strike, Pall Mall and Rothmans. Its brands also include Velo, Vuse[4] and Glo.[5]
        BAT has a primary listing on the London Stock Exchange and is a constituent of the FTSE 100 Index. It has a secondary listing on the Johannesburg Stock Exchange. BAT plc ordinary shares are also listed on the New York Stock Exchange in the form of American Depositary Shares.
        </p>
        <p className='font-bold text-xl tracking wider text-red-800 uppercase bg-black py-2 w-fit pr-5 mt-2 rounded '>
          only enter if your are over the age 18
        </p>
        <div className='mt-5 flex flex-row gap-4'>
          <Link href="./">
          <button className='px-3 py-2 rounded border capitalize text-black tracking-wider font-bold bg-white'>age under 18</button>
          </Link>
         <Link href='/all'>
          <button className='px-5 py-2 rounded border capitalize text-black tracking-wider font-bold bg-white'>yes adult</button>
         </Link>
        </div>
        </div>
   </div>
   
   </>
  )
}

export default Gather_them