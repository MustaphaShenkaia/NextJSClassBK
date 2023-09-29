import React from 'react'

function Page( {params} ) {
  return (
    <div>Product Detail: {params.id}</div>
  )
}

export default Page
// {params.id} id adı klasörden gelir. 