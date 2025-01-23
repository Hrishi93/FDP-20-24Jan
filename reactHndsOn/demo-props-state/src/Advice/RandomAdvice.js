import React from 'react'

const adviceArray= [
    "You should eat more fruits",
    "You should drink more water",
    "You should exercise more",
    "You should sleep more",
    "You should eat more vegetables",
]

const RandomAdvice = ({onSelectAdvice}) => {

 const getRandomAdvice = () =>{
    const randomIndex = Math.floor(Math.random() * adviceArray.length);
    return adviceArray[randomIndex];
 }


   const handleClick = () =>{
    //const ans = adviceArray[2];
    //console.log(ans);
    const randomAdvice = getRandomAdvice();
    //console.log(randomAdvice);
    onSelectAdvice(randomAdvice);
   } 
  return (
    <div>
      <button onClick={handleClick}>Get Advice</button>
    </div>
  )
}

export default RandomAdvice
