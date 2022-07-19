
import './App.css';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Lista from './components/Lista';
import ShowUserName from './components/ShowUserName';


function App() {
const cars =[
  {id:1 , brand: "ferrari" , color:"black", newCar: true, km:0},
  {id:2 , brand: "porshe" , color:"red", newCar: false, km:100},
  {id:3 , brand: "fusca" , color:"green", newCar: true, km:0}
]

  return (
    <div className="App">
    <h2>Hello React</h2>
    
    {/* <Lista />
    <ConditionalRender/>
    <ShowUserName name="Matheus"  age={12}   color="black" newCar = 'true' />
    <CarDetails marca="VW"  km = {0}   color="black" />
    <CarDetails marca="Fiat"  km = {15}   color="red" newCar = 'false' /> */}
    {cars.map((c) => (
      <CarDetails marca={c.marca} 
      km={c.km} 
      color={c.color} 
     
      newCar={c.newCar}/>
    
    ))}
    
    </div>
  );
}

export default App;
