import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Daftar.module.css';

const Daftarlapangan = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Daftar Lapangan</title>
        </Head>

        {/* Navbar */}
        <nav className={styles.navbar}>
          <img src="/futsal-logo.jpg" alt="Logo" className={styles.logoImage} />
          <ul className={styles.navLinks}>
            <div className={styles.left}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
            </div>
            <div className={styles.right}>
              <li><Link href="/daftar">Daftar Lapangan</Link></li>
            </div>
          </ul>
        </nav>

        {/* Daftar Lapangan Section */}
        <section className={styles.fields}>
          <h2>DAFTAR LAPANGAN</h2>

          <div className={styles.fieldGrid}>
            {/* Lapangan 1 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 1.jpg" alt="Lapangan 1" className={styles.fieldImage} />
              <h3>Lapangan 1</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 100.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>

            {/* Lapangan 2 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 2.jpg" alt="Lapangan 2" className={styles.fieldImage} />
              <h3>Lapangan 2</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 150.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>

            {/* Lapangan 3 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 3.jpg" alt="Lapangan 3" className={styles.fieldImage} />
              <h3>Lapangan 3</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 120.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>

            {/* Lapangan 4 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 4.jpg" alt="Lapangan 4" className={styles.fieldImage} />
              <h3>Lapangan 4</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 100.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>

            {/* Lapangan 5 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 5.jpg" alt="Lapangan 5" className={styles.fieldImage} />
              <h3>Lapangan 5</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 100.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>

            {/* Lapangan 6 */}
            <div className={styles.fieldCard}>
              <img src="/lapangan 6.jpg" alt="Lapangan 6" className={styles.fieldImage} />
              <h3>Lapangan 6</h3>
              <p>Lapangan Sintetis</p>
              <p>Harga perjam: 100.000</p>
              <Link href="/payment" passHref>
              <button className={styles.bookButton}>PESAN</button></Link>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className={styles.bookingSection}>
          <img 
            src="/lapangan.jpg" 
            alt="Booking Lapangan" 
            className={styles.bookingImage} 
          />
          <p className={styles.bookingText}>
            Booking Lapangan Jadi Mudah & Aman
          </p>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInfo}>
            <p>Hubungi Kami</p>
            <p>Alamat Lapangan: Jl. Letjen Sutoyo No.1, Banyuwangi, Jawa Timur</p>
            <p>No Hp. 082345681234</p>
            <p>Futsalbanyuwangi@gmail.com</p>
          </div>
          <div className={styles.socialMedia}>
            <h4>Social Media</h4>
            <p><a href="https://instagram.com/futsal_banyuwangi" target="_blank" rel="noopener noreferrer">Instagram: futsal_banyuwangi</a></p>
            <p><a href="https://facebook.com/futsalbanyuwangi" target="_blank" rel="noopener noreferrer">Facebook: futsalbanyuwangi</a></p>
            <p><a href="https://tiktok.com/@futsalbanyuwangi23" target="_blank" rel="noopener noreferrer">TikTok: futsalbanyuwangi23</a></p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Daftarlapangan;
