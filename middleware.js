import React from 'react'
import { NextResponse } from 'next/server'

export function middleware(request) {

    console.log(NextResponse, "NextResponse");

    return NextResponse.rewrite(new URL('/about-2', request.url))
}

export const config = {
    matcher: '/about/:path*',
  } 
  // config middleware hangi sayfada kullanılacaksa onları tanımlar. 
  // path about ve altındaki tüm sayfalarda çalışsın anlamı taşır. 

  // https://nextjs.org/docs/app/building-your-application/routing/middleware 
  // redirect() -> NextResponse yönlendirme kümesiyle bir a döndürür. 
  // rewrite()  -> NextResponse yeniden yazma kümesiyle bir a döndürür. 
  // next()     -> NextResponse ara yazılım zincirini deavm ettirecek bir a döndürür. 