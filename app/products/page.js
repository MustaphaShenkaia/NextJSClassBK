"use client" 
import React from 'react'
import { useSearchParams, usePathname } from "next/navigation";

function Page() {

  // useSearchParams
  // http://localhost:3000/products?name=mustafa
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const surname = searchParams.get("surname")
  console.log(name, "name"); // mustafa name
  console.log(surname, "surname"); // senkaya surname

  const pathName = usePathname()
  console.log(pathName); // /products

  return (
    <div>Products</div>
  )
}

export default Page