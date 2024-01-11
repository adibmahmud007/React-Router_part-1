
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <div>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
        <h1 className='text-6xl text-center font-extrabold'>Price List</h1>
      </div>
       <PriceOption></PriceOption>
    </>
  )
}

export default App
