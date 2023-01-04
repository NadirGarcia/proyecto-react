import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting = "Los mejores destinos al mejor precio"/>
        <ItemCount onAdd = {(count) => console.log(count)} initial='1'/> 
    </div>
  );
}

export default App;
