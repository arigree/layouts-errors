"use client";

import Error from "next/error";

export default function BooksPage(){
    function throwError(){
        console.log("Bad Books");
        throw new Error("Bad Books");
        
    }
    return(
        <main>
            <h1>
                Book
            </h1>

            <button onClick={throwError}>Open Bad Books</button>
        </main>
    )
}