"use client";

import Error from "next/error";
import BooksError from "./error";

export default function BooksPage(){
    
        try{
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
    );
        
    }catch(e){
        return <BooksError error={e}/>
    }

   
}