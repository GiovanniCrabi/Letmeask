import '../styles/room-code.scss';

import copyImg from '../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;

}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText('sadjisdajiasdj')
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img className='image' src={copyImg} alt="Copy room code" />
      </div>
      <span> Sala #92183923892381 </span>
    </button>
  )
}