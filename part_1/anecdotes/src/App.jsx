import { useState } from "react"

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxVoted, setMaxVoted] = useState()

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleSelected = () => {
    const newSelected = getRandomNumber(0, anecdotes.length)
    setSelected(newSelected)
  }

  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    const max = getMaxVoted(newVotes)
    setMaxVoted(max)
  }

  const getMaxVoted = (votes) => {
    let max = votes[0]
    for(let i = 1; i < votes.length; i++) {
      if(votes[i] > max) {
        max = votes[i]
      }
    }
    return max;
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleSelected}>Generate new anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVoted]}</p>
      <p>has {votes[maxVoted]} votes</p>
    </div>
  )
}

export default App
