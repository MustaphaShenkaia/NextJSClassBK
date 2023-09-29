import React from 'react'
import { redirect } from "next/navigation";

function page() {

    let nav1 = false

    if (nav1) {
        redirect("/products")
    }

  return (
    <div>Redirect</div>
  )
}

export default page