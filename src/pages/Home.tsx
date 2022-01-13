import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export const Home = () => {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e responstas"
        />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tire as dúvisas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Logo Letmeask" />

          <button>
            <img src={googleIconImg} alt="Google Logo" />
            Crie sua slal com o Google
          </button>

          <div>ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
};
