import React from 'react'

const fetchData1 = async () => {
    const res = await fetch("https://restcountries.com/v3.1/name/eesti")
    return res.json()
}

const fetchData2 = async () => {
    const res = await fetch("https://restcountries.com/v3.1/name/deutschland")
    return res.json()
}

const Page = async() => {

    // const data1 = await fetchData1()
    // const data2 = await fetchData2()

    // üstteti fonksiyonun tamamlanmasını bekler.
    // Sayfa yavaşlar ve geç veri gelir. 

    // console.log(data1);
    // console.log(data2);

    //---------------------

    // ÇOKLU API

    const data1 = fetchData1()
    const data2 = fetchData2() 
    // promise döner (async)

    const resulData = await Promise.all([
        data1,
        data2
    ])    

    console.log(resulData);


  return (
    <div>page</div>
  )
}

export default Page



  
  
  





