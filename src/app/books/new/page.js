"use client";

export default function NewBookPage() {
  return (
    <main>
      <h1>New Book</h1>
      <form>
        <div>
          <label htmlFor="bookName">Name</label>
          <input type="text" id="bookName" name="bookName"></input>
        </div>
        <div>
          <label htmlFor="bookCover">Cover Image</label>
          <input type="file" accept="image/*" id="bookCover" name="bookCover"></input>
        </div>
        <div>
            <button type="submit" value="Add Book"/>
        </div>
      </form>
    </main>
  );
}
