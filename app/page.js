import React from 'react' // rfce

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const Page = async() => {

  await sleep(3000)

  console.log("Deneme Mesajı");
  // SSR -> Browser consol ekranında çıkmaz. 
  // SSR -> Terminalde çıkar. 
  // App klasörü SSR dosyalarını tutar. 

  return (
    <>
      <div>page</div>
    </>
  )
}

export default Page