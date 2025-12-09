import Display from "./assets/Display"

function App() 
{
 var  name="demo";
 var val1=23;
 const arr=[12,23,34]
 const person={name:"sai", gender:'male'}
  return (
    <>
     <h1> welcome</h1>
     <Display name={name} a={val1} arr={arr} obj={person}/>
     </>
  )
}

export default App