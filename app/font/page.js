import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

function page() {
  return (
    <div className={roboto.className}> Font Page</div>
  )
}

export default page