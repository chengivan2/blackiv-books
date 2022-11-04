import './App.css';
import {useState} from 'react';
import axios from "axios";

function App() {

  const [book, setBook] = useState("");
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
    <div className="bg-gray-400 min-w-full py-15">

      <div className='flex justify-center pt-5'>
        <h2 className='font-bold'>Start Typing to view books</h2>
      </div>

      <form className="flex flex-col items-center justify-center pb-10" onSubmit={handleSubmit}> {/* Event will fire this method when the form is submitted */}
        <div className="min-w-[50%] flex items-center justify-center py-5">
          <input type="text" className='min-w-[55%] bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500" id="inline-full-name" type="text" rounded-md caret-pink-700' onChange={handleChange}/> {/* Event will fire this method when the value changes */}
        </div>

        <div>
          <button type="submit" className="rounded-md bg-red-600 hover:bg-red-300 px-5 py-4 text-lg">Submit</button>
        </div>
      </form>

      <div className='grid md:grid-cols-4 gap-6 bg-gray-600 justify-center px-5 py-20'>
        {result.map(book => (
          
          <div className='bg-gray-400 hover:shadow-lg hover:shadow-gray-500 shadow-[0_35px_60px_-15px_rgba(1,1,1,1.3)] hover:bg-gray-500 flex flex-col py-5 justify-center rounded-xl align-center'>

            <a target="_blank" href={book.volumeInfo.previewLink}>
              <div className='flex justify-center align-center'>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
              </div>
              <p className='text-center py-3'>{book.volumeInfo.title}</p>
            </a>

          </div>

        ))}
      </div>

    </div>
    
  );
}

export default App;
