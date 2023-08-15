// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    var lang = "ja";
    if (typeof window !== 'undefined') {
        if (navigator.language.startsWith("en")) {
            lang = "en";
        } else if (navigator.language.startsWith("ja")) {
            lang = "ja";
        }

    }

    // return NextResponse.redirect(new URL('/about-2', request.url))
}

