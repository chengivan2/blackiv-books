import './App.css';
import { axios } from "axios";

function App() {
  return (
    <div className="grid justify-center min-w-full">
      <div>
        <h2 className='font-bold'>Start Typing to view books</h2>
      </div>
      <form onSubmit={handeSubmit}>
        <div className="py-5">
          <input type="text" className='bg-blue-300' onChange={handleChange}/>
        </div>

        <div>
          <button type="submit" className="rounded-full bg-red-600 hover:bg-red-300 px-4">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
