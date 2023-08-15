// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {


//     if (typeof window !== 'undefined') {
//         if (navigator.language.startsWith("en")) {
//             return NextResponse.rewrite(new URL('/about-2', request.url))
//         } else if (navigator.language.startsWith("ja")) {
//             return NextResponse.rewrite(new URL('/about-2', request.url))
//         }

//     }

//     // return NextResponse.redirect(new URL('/about-2', request.url))
// }

