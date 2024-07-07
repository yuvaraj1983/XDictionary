import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [dictionarytext, setDictionaryText] = useState("");
  const [meaning,setMeaning] = useState("")

  const disctionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }

]

  const handleSearch = (e) => {
      e.preventDefault();
      let wordmeaning =  disctionary.find((word) => (
        word.word.toLowerCase() === dictionarytext.toLowerCase()
      ))
     
      if(wordmeaning) {
        setMeaning(wordmeaning.meaning);
      } else {
        setMeaning("Word not found in the dictionary.");
      }
      
  }

  return (
    <>
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>

     
     <input 
     type='text'
     placeholder='Search for a word'
     value={dictionarytext}
     onChange={(e) => setDictionaryText(e.target.value)}

     />
     <button type='submit'>
      Search
     </button>
     </form>
     <h4 >Definition:</h4>
     <p>{meaning}</p>
     </div>
  
     </>
  );
}

export default App;
