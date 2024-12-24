import useStore from './store/store'

function App() {
  const { bears, increasePopulation } = useStore((state) => state)
  return (
    <div className="">
      <h1>{bears} around here .....</h1>
      <button onClick={increasePopulation}>Inc.</button>
    </div>
  )
}

export default App
