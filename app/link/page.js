import React from 'react'
import Link from 'next/link';

// http://localhost:3000/link

function Page() {
  return (
    <>
        <Link href="/products"> Yönlendirme 1 </Link> <br /> <br />

        <Link href="/products?name=mustafa&surname=senkaya"> Yönlendirme 2 </Link> <br /> <br />

        <Link href={ {
            pathname : "products",
            query: {
                name: "mustafa",
                surname: "senkaya"
            }
        } }> Yönlendirme 3 </Link>
    </>
  )
}

export default Page