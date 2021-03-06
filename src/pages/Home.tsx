import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';
import { database } from '../services/firebase';

export const Home = () => {
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does note exist');

      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');

      return;
    }

    navigate(`rooms/${roomCode}`);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e responstas"
        />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tire as dúvisas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo Letmeask" />

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google Logo" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={handleOnChange}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
