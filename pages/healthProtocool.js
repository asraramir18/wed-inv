import Image from 'next/image'
import styles from '../styles/DetailAcara.module.css'

export default function HealthProtocool() {
  return (
    <div className={styles.container}>
      <Image
        alt='ornamentProkes'
        src="/image/ornament/ornamentProkes.png"
        width={512}
        height={107}
        objectFit='contain'
      />
      <h1 className="title">
        Protokol Kesehatan
      </h1>
        <div className={styles.cardContainerAcara}>
          <Image
            alt='ornamentProtokol1'
            src="/image/ornament/ornamentProtokol1.png"
            width={383}
            height={95}
            objectFit='contain'
          />
          <div>
            <div>
              <Image
                alt='Masker'
                src="/image/icon/Masker.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Menggunakan Masker</p>
            </div>
            <div>
              <Image
                alt='JabatTangan'
                src="/image/icon/JabatTangan.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Tidak Berjabat Tangan</p>
            </div>
            <div>
              <Image
                alt='menjagaJarak'
                src="/image/icon/menjagaJarak.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Menjaga Jarak</p>
            </div>
          </div>
          <div>
            <div>
              <Image
                alt='sabun'
                src="/image/icon/sabun.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Mencuci Tangan</p>
            </div>
            <div>
              <Image
                alt='suhu'
                src="/image/icon/mengukurSuhu.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Mengukur Suhu Tubuh</p>
            </div>
            <div>
              <Image
                alt='handsanitizer'
                src="/image/icon/handsanitizer.png"
                width={170}
                height={170}
                objectFit='contain'
              />
              <p>Menggunakan Handsanitizer</p>
            </div>
          </div>
          <Image
            alt='ornamentProtokol2'
            src="/image/ornament/ornamentProtokol2.png"
            width={383}
            height={95}
            objectFit='contain'
          />
        </div>
      <div style={{ height: '100px'}} />
    </div>
  )
}
