import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function TheBride() {
  return (
    <div className={styles.container}>
      <Image
        alt='hiasanBride'
        src="/image/ornament/theBrideOrnament.png"
        width={383}
        height={95}
        objectFit='contain'
      />
      <h1 className={styles.title}>
        The Bride
      </h1>
      <div className={styles.brideCardsFlexbox}>
        <div className='cardContainer'>
          <div>
            <Image
              alt='profileRiza'
              src="/image/profilRiza.png"
              width={422}
              height={461}
              objectFit='contain'
            />
            <p>ANDI RIZA SYAFITRI</p>
            <p>Putri Dari</p>
            <p>Bpk.  Ir. H. Syahruddin Patiroi</p>
            <p>Ibu dr.Hj. Aminah Machmud</p>
          </div>
        </div>
        <div style={{width: '20%'}} />
        <div className='cardContainer'>
          <div>
            <Image
              alt='profilaAsrar'
              width={422}
              height={461}
              src="/image/profilAsrar.png"
              objectFit='contain'
            />
            <p>MUHAMMAD ASRAR AMIR</p>
            <p>Putra Dari</p>
            <p>Bpk. H. Muhammad Amir Zainuddin, S.E., MM</p>
            <p>Ibu dr. Hj. Suliati P Amir, Sp.M.,M.Med.Ed</p>
          </div>
        </div>
      </div>
      <div style={{ height: '100px'}} />
    </div>
  )
}
