"use client";

import Link from "next/link";

export default function BooksPageNotFound(){
    return(
        <main>
            <h1>Page Not Found</h1>
            <p>Go view our catalog of books to see if you can find what you were looking for.</p>
            <Link href="/books">Go to catalog</Link>
        </main>
    )
}