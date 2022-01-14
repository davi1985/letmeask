import copyImg from '../../assets/images/copy.svg';

import { RoomCodeProps } from './type';

import './styles.scss';

export const RoomCode = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code as string);
  };

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
};
