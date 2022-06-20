import './App.css';
import { ItemCard } from './components/item-card';

const Cakes = [
  {
      url: "https://static.tildacdn.com/tild3331-3463-4665-a233-653066363037/-51.JPG",
      name: "Milky Girl",
      price: 5800,
      description: "Air biscuits and buttercream 'plombir'",
  },
  {
      url: "https://static.tildacdn.com/tild3761-3234-4836-b062-663539323563/-98.JPG",
      name: "Red Velvet",
      price: 6500,
      description: "Moist, porous biscuits and cream cheese. sgjndfgjkbgjbflgjbziudghluigblidghkbgjlbdlgfbhzdgzfbgbzdgbjhgfbsgjndfgjkbgjbflgjbziudghluigblidghkbgjlbdlgfbhzdgzfbgbzdgbjhgfbsgjndfgjkbgjbflgjbziudghluigblidghkbgjlbdlgfbhzdgzfbgbzdgbjhgfbsgjndfgjkbgjbflgjbziudghluigblidghkbgjlbdlgfbhzdgzfbgbzdgbjhgfbsgjndfgjkbgjbflgjbziudghluigblidghkbgjlbdlgfbhzdgzfbgbzdgbjhgfb",
  }
];

function App() {
  return (
    <div className="row">
      {Cakes.map((cake) => (
        <ItemCard cake={cake}/>
      ))}
    </div>
  );
}

export default App;
