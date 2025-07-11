import { useEffect, useRef } from 'react';
import { useNavigate, Outlet, Link, useLocation } from 'react-router-dom';
import './style.css';

 function Layout() {
  const menuRef = useRef(null);
  const spanRef = useRef(null);
  const barraRef = useRef(null);
  const corpoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fecharMenu();
  }, [location.pathname]);

  const abrirMenu = () => {
    const menu = menuRef.current;
    const span = spanRef.current;
    const barra = barraRef.current;
    const corpo = corpoRef.current;

    if (menu && span && barra && corpo) {
      menu.classList.add('ativo');
      span.classList.add('ativo');
      barra.style.backgroundColor = '#4d2a50';
    }
  };

  const fecharMenu = () => {
    const menu = menuRef.current;
    const span = spanRef.current;
    const barra = barraRef.current;
    const corpo = corpoRef.current;

    if (menu && span && barra && corpo) {
      menu.classList.remove('ativo');
      span.classList.remove('ativo');
      barra.style.backgroundColor = getComputedStyle(corpo).backgroundColor;
    }
  };

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (menu.classList.contains('ativo')) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  };

  const irParaInicio = () => {
    navigate('/');
  };

  return (
    <div id="corpo" ref={corpoRef}>
      <h1>&lt;/Portal_de_Estudos/&gt;</h1>
      <img src="/logo.png" alt="logo do IF" className="if" onClick={irParaInicio} />

      <header className="barra-lateral" ref={barraRef}>
        <div className="menu-wrapper">
          <i id="burguer" className="material-icons" onClick={toggleMenu}>menu</i>
          <span id="spam" ref={spanRef}>Disciplinas</span>

          <nav id="menu" ref={menuRef}>
            <ul>
              <li><Link to="/matematica"><i className="material-icons">calculate</i> Matemática</Link></li>
              <li><Link to="/quimica"><i className="material-icons">science</i> Química</Link></li>
              <li><Link to="/biologia"><i className="material-icons">biotech</i> Biologia</Link></li>
              <li><Link to="/portugues"><i className="material-icons">language</i> Português / Redação</Link></li>
              <li><Link to="/historia"><i className="material-icons">castle</i> História</Link></li>
              <li><Link to="/filosofia"><i className="material-icons">lightbulb</i> Filosofia</Link></li>
              <li><Link to="/redes"><i className="material-icons">lan</i> Redes</Link></li>
              <li><Link to="/manutencao"><i className="material-icons">build</i> Manutenção</Link></li>
              <li><Link to="/bd"><i className="material-icons">memory</i> Banco de dados</Link></li>
              <li><Link to="/autoria_web"><i className="material-icons">computer</i> Autoria Web</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout