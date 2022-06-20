import './App.css';
import { ItemCard } from './components/item-card';
import { Navbar } from './components/Navbar/Navbar';
import { Filter } from './components/Filter';

const Cakes = [
  {
    url: "https://static.tildacdn.com/tild3331-3463-4665-a233-653066363037/-51.JPG",
    name: "Milky Girl",
    price: "5,800 KZT",
    description: "Air biscuits and buttercream 'plombir'.",
  },
  {
    url: "https://static.tildacdn.com/tild3761-3234-4836-b062-663539323563/-98.JPG",
    name: "Red Velvet",
    price: "6,500 KZT",
    description: "Moist, porous biscuits and cream cheese.",
  },
  {
    url: "https://static.tildacdn.com/tild6633-3938-4534-b830-303037663664/-39.JPG",
    name: "Miner",
    price: "6,200 KZT",
    description: "Airy, thin biscuits and butter cream with the addition of natural chocolate.",
  },
  {
    url: "https://static.tildacdn.com/tild6135-6634-4864-a562-343832636137/-57.JPG",
    name: "Spartacus",
    price: "5,700 KZT",
    description: "Thin chocolate-honey cakes with delicate ice cream.",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Filter/>
      <div className="row">
        {Cakes.map((cake) => (
          <ItemCard cake={cake}/>
        ))}
      </div>
    </> 
  );
}

export default App;
