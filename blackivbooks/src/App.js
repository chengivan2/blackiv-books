import './App.css';
import {useState} from 'react';
import axios from "axios";

function App() {

  const [book, setBook] = useState("java");
  const [result, setResult] = useState([]);
  const [APIKey, setAPIKey] = useState("AIzaSyA1yyhNpFfei5ed2AVGGkt4ok-QH5DHgGk");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + APIKey).then(
      data => {
        setResult(data.data.items);
      }
    );
  }


  return (
    <div className="min-w-full py-15">

      <div className='flex justify-center'>
        <h2 className='font-bold'>Start Typing to view books</h2>
      </div>

      <form className="flex flex-col items-center justify-center pb-10" onSubmit={handleSubmit}> {/* Event will fire this method when the form is submitted */}
        <div className="py-5">
          <input type="text" className='bg-blue-300' onChange={handleChange}/> {/* Event will fire this method when the value changes */}
        </div>

        <div>
          <button type="submit" className="rounded-md bg-red-600 hover:bg-red-300 px-5 py-4 text-lg">Submit</button>
        </div>
      </form>

      <div className='grid grid-cols-4 gap-4'>
        {result.map(book => (
          <div>

            <a target="_blank" href={book.volumeInfo.previewLink}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
              <p className='py-2'>{book.volumeInfo.title}</p>
            </a>

          </div>

        ))}
      </div>

    </div>
    
  );
}

export default App;
