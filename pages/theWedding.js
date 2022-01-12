import Image from 'next/image'
import styles from '../styles/DetailAcara.module.css'
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <p>Sudah Hari H</p>;

// Renderer callback with condition
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div style={{ aspectRatio: 1, width: '50px', margin: '30px'}}>
        <div>
          {days}
        </div>
        <p>
        DAYS
        </p>
      </div>
      <div style={{ aspectRatio: 1, width: '50px', margin: '30px'}}>
        <div>
          {hours}
        </div>
        <p>
        HOURS
        </p>
      </div>
      <div style={{ aspectRatio: 1, width: '50px', margin: '30px'}}>
        <div>
          {minutes}
        </div>
        <p>
        MINUTES
        </p>
      </div>
      <div style={{ aspectRatio: 1, width: '50px', margin: '30px'}}>
        <div>
        {seconds}
        </div>
        <p>
        SECONDS
        </p>
      </div>
      </div>;
  }
};


export default function TheWedding() {
  return (
    <div className={styles.container}>
      <Image
        alt='hiasanWedding'
        src="/image/ornament/theWeddingOrnament.png"
        width={383}
        height={95}
        objectFit='contain'
      />
      <h1 className="title">
        The Wedding
      </h1>
        <div className={styles.cardContainerAcara}>
          <div>
            <Image
              alt='calendar'
              src="/image/icon/Calendar.png"
              width={70}
              height={70}
              objectFit='contain'
            />
            <p>Sabtu, 12 Maret 2022</p>
            <p>Phinisi Ballroom Hotel Claro (Lt.2) </p>
            <p>Jl. A. P. Pettarani No.03 Makassar</p>
            <div>
              <p>View Location</p>
            </div>
          </div>
          <div style={{ position: 'relative'}}>
            <Image
              alt='rings'
              src="/image/icon/Rings.png"
              width={104}
              height={104}
              objectFit='contain'
            />
            <div style={{ backgroundColor: "black", height: "5px", width: "100%",position: 'relative'}}/>
            <p>Akad Nikah</p>
            <p>09 : 00 WITA</p>
          </div>
          <div style={{ position: 'relative'}}>
            <Image
              alt='dinner'
              src="/image/icon/Dinner.png"
              width={107}
              height={107}
              objectFit='contain'
            />
            <div style={{ backgroundColor: "black", height: "5px", width: "100%",position: 'relative'}}/>
            <p>Resepsi</p>
            <p>12 : 00 WITA</p>
          </div>
      </div>
      <div style={{ height: '100px'}} />
      <div>
        <Image
          alt='countdownHiasan1'
          src="/image/ornament/countdownOrnament2.png"
          width={383}
          height={95}
          objectFit='contain'
        />
        <h1 className="title">
          Detik Detik Menuju Hari H
        </h1>
        <div>
          <Countdown
            date={"2022-03-12T09:30:00"}
            renderer={countdownRenderer}
          />,
        </div>
        <Image
          alt='countdownHiasan2'
          src="/image/ornament/countdownOrnament1.png"
          width={383}
          height={95}
          objectFit='contain'
        />
      </div>
    </div>
  )
}
