import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <>
        <Image 
            src="https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg"
            width="300"
            height="300"
        />
        {/* next.config.js içinde nextConfig içine image dışarıdan alma verileri tanımlanmalıdır */}
        {/* width ve height yerine fill kullanılır fakat onunda ayarları vardır */}
    </>
  )
}

export default Page
// https://nextjs.org/docs/pages/building-your-application/optimizing/images