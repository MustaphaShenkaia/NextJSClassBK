### 1-Installation
- React (CSR) JS Library 
- NextJS (SSR) React Framework -> (SEO - Routing)
https://nextjs.org/docs 
https://nextjs.org/docs/pages/building-your-application/upgrading/version-13 
https://nextjs.org/docs/getting-started/installation 

- package.json -> npm install
- npm run dev
public
Delete app
Delete pages -> backend

### 2-Routing
- app folder
- app / page.js (zorunlu ad)    -> http://localhost:3000
- app / layout.js (zorunlu ad)  -> http://localhost:3000

- Static & Dynamic Rauting
- app / products / page.js              -> http://localhost:3000/products
- app / products / [id] / page.js       -> http://localhost:3000/products/1
- app / products / [...id] / page.js    -> http://localhost:3000/products/1/2/3
- app / products / içindeki page silinirse yine de hata vermez. 
- app / products / [[...id]] / page.js  -> http://localhost:3000/products/1/2/3
- NextJS içerisindeki her klasör URL yönlendirmesi yapar. 
- app / mst / page.js               -> http://localhost:3000/mst
- app / yorum / mst / page.js       -> http://localhost:3000/yorum/mst
- app / (yorum) / mst / page.js     -> http://localhost:3000/mst

### 3-next/link, next/image
- import Link from 'next/link' (Yönlendirme)
https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
- import Image from 'next/image' (Image ekler)
https://nextjs.org/docs/pages/building-your-application/optimizing/images 

### 4-@next/font/google, cookies
- Local & Google Font -> import { Roboto } from 'next/font/google'
- https://nextjs.org/docs/pages/building-your-application/optimizing/fonts 
- import {cookies} from 'next/headers';

### 5-layout.js, loading.js, not-found.js, head.js
- page.js, layout.js özel componentler ve adları değiştirilemez. 
- loading.js, not-found.js, head.js componentler de özel ve adları değiştirilemez. 
- header ve footer kısımlar sayfada sabittir. 
- layout.js içinde {children} değişen kısmı temsil eder. 
- layout.js içinde {children} dışında kalan ise sabittir. 
- app / loading.js -> Sayfa yüklenene kadar gözükür. 
- app / not-found.js -> URL olmayan sayfada gözükür. 
- V13 öncesi root dizine pages/404.jsx dosyası oluşturulur. 
- head.js sayfa tab title için kullanılır. 
- head.js app içinde, products içinde, about içinde vb. kullanılabilir. 

### 6-SSR&CSR testing , "use client" 
- SSR 'den CSR 'e geçiş için kullanılır. 
- Next modüllerinin olduğu sayfada kullanılamaz. 

### 7-Redirect, useRouter, useSearchParams, usePathname
- Redirect, yönlendirme işlemi yapar. 
- Bir işlem sonucu başka sayfaya gitmesi gerektiğinde kullanılır. 
- useRouter, buton click işleminden sonra farklı sayfalara yönlendirmede kullanılır. 
- push, refresh, back, forward olmak üzere 4 özelliği vardır. 
- useRouter, CSR page üzerinde "use client" ile kullanılır. 
- useSearchParams url param değerini almaya yarar. 
- use ile başlayan yapılarda genelde "use client" kullanılır. 
- Bu sebeple SSR yapılarda kullanmamaya dikkat edilmelidir. 
- usePathname /products yolunu getirir.   

### 8-Data Fetching
- React veri çekmede useEffect, useState hook yapıları kullanılır. 
- Next içinde "use client" ile kullanılabilir. 
- SSR sayfada ise Data Fetching kullanılır. 
- Çoklu API veri çekme işlemlerinde API async await içerdiği için beklemeden dolayı veri gecikmesine neden olur. 
- https://restcountries.com/ 
- async await yapısı ile kullanılır. 

### 9-generateStaticParams()
- 2 numaralı ürün detail sayfasına gidince Api'den 2 numaralı ürün çekilecek.  
- Sonra static html'de saklanır. 
- Tekrar 2 numaralı ürün detayına gidilince Api yerine static html^den ürün çekilir. 

### 10-API Routes
- page/api klasöründe çalışır. page/api/posts/index.js  

### 11-Middleware
- Backend tarafında çok kullanılan bir kavramdır. 
- https://nextjs.org/docs/app/building-your-application/routing/middleware
- redirect() -> NextResponse yönlendirme kümesiyle bir a döndürür. 
- rewrite()  -> NextResponse yeniden yazma kümesiyle bir a döndürür. 
- next()     -> NextResponse ara yazılım zincirini deavm ettirecek bir a döndürür. 

### 12-Environment + ModuleCSS
- env.local
- page.module.css

############################################################################################################

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
"# NextJSClassBK" 
