import React from 'react'
import {cookies} from 'next/headers';

function Page() {

    const newCookies = cookies()

    console.log(newCookies.getAll());
    // Array -> [ { name: 'io', value: '_5HT3ndSt9HqfqFWAAFA' } ] 
    console.log(newCookies.get('io').value);
    // Array -> [ { name: 'io', value: '_5HT3ndSt9HqfqFWAAFA' } ] 
    // set delete yapım aşamasında

  return (
    <div>Cookies</div>
  )
}

export default Page
// Cookie server tabanlı olduğundan local storage göre daha çok kullanılır.  
// Inspect -> Storage -> Cookies
// Supported and Planned features -> Tamamlanan yada yapım aşamasında olan moduller