import './style.css';

function Portal() {
  return (
    <div className="portal-inicial">
      {/* 🔰 Logo da InfoV (separada da mensagem de boas-vindas) */}
      <div className="infov">
        <img src="/INFO V.png" alt="logo de InfoV" className="infov" />
      </div>

      {/* 👋 Mensagem de boas-vindas */}
      <section className="boas-vindas">
        <h2>Bem-vindo ao Portal de Estudos INFO V!</h2>
        <p>
          Aqui você encontra materiais extras, revisões e reforços das aulas para te ajudar nos estudos.
        </p>
      </section>
    </div>
  );
}

export default Portal