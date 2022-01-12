import Image from 'next/image'
import styles from '../styles/DetailAcara.module.css'
import Countdown from 'react-countdown';

export default function TheWish() {

  const postComment = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <div className={styles.container}>
      <Image
        alt='ornamentWish'
        src="/image/ornament/ornamentWish.png"
        width={629}
        height={106}
        objectFit='contain'
      />
      <h1 className="title">
        Wish and Prayer
      </h1>
        <div className={styles.cardContainerAcara}>
          <form onSubmit={postComment}>
            <input id="name" type="text" autoComplete="Nama...." required />
            <input id="comment" type="text" autoComplete="Tulis Pesan...." required />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className={styles.cardContainerAcara}>
          <div>
            <p>Nama</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div style={{ height: '10px', backgroundColor: '#F4C7AB'}} />
          </div>
          <div>
            <p>Nama</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div style={{ height: '10px', backgroundColor: '#F4C7AB'}} />
          </div>
          <div>
            <p>Nama</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div style={{ height: '10px', backgroundColor: '#F4C7AB'}} />
          </div>
          <div>
            <p>Nama</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div style={{ height: '10px', backgroundColor: '#F4C7AB'}} />
          </div>
        </div>
        <Image
          alt='thankYou.png'
          src="/image/thankYou.png"
          width={567}
          height={309}
          objectFit='contain'
        />
      <div style={{ height: '100px'}} />
    </div>
  )
}
