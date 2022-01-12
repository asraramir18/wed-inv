import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Introduction() {
  return (
    <div className={styles.introductionContainer}>
      {/* <Image
        alt='Banner'
        src="/image/banner.jpg"
        layout='fill'
        width='1440'
        height='605'
        objectFit='contain'
      /> */}
      <p className='bannerTitle'>
        PERNIKAHAN DARI
      </p>
      <h1 className={styles.brideName}>
        Riza & Asrar
      </h1>
    </div>
  )
}
