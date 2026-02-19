import './App.css'
import { recetasMock } from './mockData';
import ListaRecetas from './components/ListaRecetas';

function App() {
  
  return (
    <div>
      <h1>Cocina con Irene</h1>
      <ListaRecetas recetas={recetasMock} />
    </div>
  );
}

export default App
