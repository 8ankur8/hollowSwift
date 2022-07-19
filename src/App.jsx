import { useState } from 'react' 
import { Nav,Welcome,Footer,Services,Transactions } from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    
    <div className="min-h-screen">
      <div className="radient">
        <Nav/>
        <Welcome/>
      </div>
      <Services/>
      <Footer/>
    </div>
    
  )
}

export default App
