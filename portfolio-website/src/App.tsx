import './App.css'
import './parallax/Parallax.css'

import GetParallaxDiv from './parallax/Parallax'
import BioDiv from './Bio';

function App()
{
  const parallax : JSX.Element = GetParallaxDiv(); //Assign to top element
  const bioSubDiv: JSX.Element = BioDiv();

  /*
  all bio will go on bioSubDiv
  */
  return (
    <div className={"parallax"}> 
      {parallax}
    </div>
  )
}

export default App
