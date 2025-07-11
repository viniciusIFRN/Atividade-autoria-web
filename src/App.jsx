import Portal from './portal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Matematica from './HiperTextosMenu/matematica';
import Quimica from './HiperTextosMenu/quimica';
import Biologia from './HiperTextosMenu/biologia';
import Portugues from './HiperTextosMenu/portugues';
import Historia from './HiperTextosMenu/historia';
import Filosofia from './HiperTextosMenu/filosofia';
import Redes from './HiperTextosMenu/redes';
import Manutencao from './HiperTextosMenu/manutencao';
import Banco from './HiperTextosMenu/bd';
import Autoria_web from './HiperTextosMenu/autoria_web';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout com rotas internas (aninhadas) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Portal />} />
          <Route path="matematica" element={<Matematica />} />
          <Route path="autoria_web" element={<Autoria_web />} />
          <Route path="bd" element={<Banco />} />
          <Route path="filosofia" element={<Filosofia />} />
          <Route path="historia" element={<Historia />} />
          <Route path="manutencao" element={<Manutencao />} />
          <Route path="portugues" element={<Portugues />} />
          <Route path="quimica" element={<Quimica />} />
          <Route path="redes" element={<Redes />} />
          <Route path="biologia" element={<Biologia />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
