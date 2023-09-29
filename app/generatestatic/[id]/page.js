import React from 'react'

// async -> await
const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json() // JSON'q çevir
}


const Page = async( {params} ) => {

    // console.log(params.id);
    const data = await fetchPosts()
    console.log(data);

  return (
    <div>Generate Id: {params.id} </div>
  )
}

export default Page

// İsim değiştirilemez. // API verisi tekrar çağrılmaz. Static HTML'den alınır. 
export async function generateStaticParams() {
    const posts = await fetchPosts()
    return posts.map(post => ({id:post.id.toString()}))
}

// https://jsonplaceholder.typicode.com/

// fetch('https://api.example.com/data')
//   .then((response) => response.json())
//   .then((data) => {
//     // "data" değişkeni, JSON formatındaki yanıt verisini içerir
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('API isteği başarısız: ', error);
//   });
