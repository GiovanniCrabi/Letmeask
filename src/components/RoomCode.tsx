import '../styles/room-code.scss';

import copyImg from '../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;

}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img className='image' src={copyImg} alt="Copy room code" />
      </div>
      <span> 
        <p className='p1'>
          Sala:
        </p> 
        <p className='p2'>
            {props.code}
        </p></span>
    </button>
  )
}