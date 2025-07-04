import { useRef } from 'react';
import './style.css';

function Portal() {
  const menuRef = useRef(null);
  const spanRef = useRef(null);
  const barraRef = useRef(null);
  const corpoRef = useRef(null);

  const Menu = () => {
    const menu = menuRef.current;
    const span = spanRef.current;
    const barra = barraRef.current;
    const corpo = corpoRef.current;

    if (menu.classList.contains('ativo')) {
      menu.classList.remove('ativo');
      span.classList.remove('ativo');
      barra.style.backgroundColor = getComputedStyle(corpo).backgroundColor;
    } else {
      menu.classList.add('ativo');
      span.classList.add('ativo');
      barra.style.backgroundColor = '#4d2a50';
    }
  };

  const inicio = () => {
    window.location.href = '/'; // ou outra rota no React Router, se for o caso
  };

  return (
    <div id="corpo" ref={corpoRef}>
      <h1>
        <img src="/public/portal_texto.PNG" alt="portal logo" className="logo_texto" />
      </h1>
      <img src="/public/logo.png" alt="logo do IF" className="if" onClick={inicio} />
      <img src="/public/INFO V.png" alt="logo de infoV" className="infov" />

      <header className="barra-lateral" ref={barraRef}>
        <div className="menu-wrapper">
          <i id="burguer" className="material-icons" onClick={Menu}>menu</i>
          <span id="spam" ref={spanRef}>Disciplinas</span>

          <nav id="menu" ref={menuRef}>
            <ul>
              <li><a href="#"><i className="material-icons">calculate</i> Matemática</a></li>
              <li><a href="#"><i className="material-icons">science</i> Química</a></li>
              <li><a href="#"><i className="material-icons">biotech</i> Biologia</a></li>
              <li><a href="#"><i className="material-icons">language</i> Português / Redação</a></li>
              <li><a href="#"><i className="material-icons">castle</i> História</a></li>
              <li><a href="#"><i className="material-icons">lightbulb</i> Filosofia</a></li>
              <li><a href="#"><i className="material-icons">lan</i> Redes</a></li>
              <li><a href="#"><i className="material-icons">build</i> Manutenção</a></li>
              <li><a href="#"><i className="material-icons">memory</i> Banco de dados</a></li>
              <li><a href="#"><i className="material-icons">computer</i> Autoria Web</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="boas-vindas">
        <h2>Bem-vindo ao Portal de Estudos INFO V!</h2>
        <p>Aqui você encontra materiais extras, revisões e reforços das aulas para te ajudar nos estudos.</p>
      </section>
    </div>
  );
}

export default Portal;
