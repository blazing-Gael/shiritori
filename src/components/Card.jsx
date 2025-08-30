import React, { useRef, useState } from 'react'

const Card = ({number, placeholder, setPlaceHolder, turn, setTurn}) => {
  const timeLimit = 10;
  const startingScore = 100;

  const [points, setPoints] = useState(startingScore);
  // const [placeholder, setPlaceHolder] = useState("");
  const [time, setTime] = useState(timeLimit);
  const [historyWords, setHistory] = useState([]);

  const [inputValue, setInputValue] = useState("");


  const isValid = async (inputValue) => {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
      
      return res.ok
    } catch (error) {
      console.log(error);
    }
  }


  const handleOnClick = async () => {
    if (1+turn != number) {
      window.alert(`It is player ${number}'s turn!`)
      return;
    }
    const isv = await isValid(inputValue);
    if (inputValue.length < 4 || !inputValue.startsWith(placeholder || history.includes(inputValue) || !isv)) {
      window.alert("word not valid");
      return;
    }
    setPoints(points-(inputValue.length+time));
    setHistory([...history, inputValue]);
    setTurn(1-turn);
    setPlaceHolder(inputValue[inputValue.length - 1]);
  }
  
  return (
    <div class="h-96 w-2xs bg-blue-950 p-3 gap-4">
      <div class="gap-5 ">
        <div class="flex item-center justify-between">
          <p>{points}</p>
          <p>Player {number}</p>
          <p>{time}</p>
        </div>
        <div class="p-3 ">
          <input 
            name="wordInput" 
            placeholder={1+turn == number? placeholder: ""} 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} 
            class="bg-blue-900 w-full"
          />
        </div>
        <button class="w-full" onClick={handleOnClick}>
          Submit
        </button>
      </div>
      <div class="h-60 overflow-auto m-2">
        {
          historyWords.map((e, index) => (
            <div key={index}>{e}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Card