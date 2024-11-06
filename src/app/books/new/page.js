"use client";

export default function NewBookPage() {
  function onAddBook(e) {
    e.preventDefault();

    const formData= new FormData(e.target);

    console.log("form data", formData.get("bookName"))
  }

  return (
    <main>
      <h1>New Book</h1>
      <form onSubmit={onAddBook}>
        <div>
          <label htmlFor="bookName">Name</label>
          <input type="text" id="bookName" name="bookName"></input>
        </div>
        <div>
          <label htmlFor="bookCover">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            id="bookCover"
            name="bookCover"
          ></input>
        </div>
        <div>
          <button type="submit" value="Add Book">Add Book</button>
        </div>
      </form>
    </main>
  );
}
