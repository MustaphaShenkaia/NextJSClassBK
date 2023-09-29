"use client" 
import React from 'react'
import { useRouter } from "next/navigation";


function page() {

    let useRoutered = useRouter()

  return (
    <>
        <div onClick={ () => useRoutered.push('/products') } > push </div>
        <div onClick={ () => useRoutered.back() } > back </div>
        <div onClick={ () => useRoutered.forward() } > forward </div>
        <div onClick={ () => useRoutered.refresh() } > refresh </div>
    </>
  )
}

export default page