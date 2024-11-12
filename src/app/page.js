import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Penyewaan Lapangan</title>
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Penyewaan Lapangan</h1>
        </div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/daftar">Daftar Lapangan</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/lapangan.jpg" // Ganti dengan path hero image
          alt="Lapangan"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <div className={styles.tagline}>
            <h2>Ayo Rasakan</h2>
            <h2>Lapangan Futsal Terbaik di Banyuwangi</h2>
          </div>
            <Link href="/daftar" passHref>
            <button className={styles.heroButton}>Lihat Daftar Lapangan</button>
            </Link>
        </div>
      </section>

      {/* Cards Section */}
      <section className={styles.facilitiesSection}>
        <h2 className={styles.cardsTagline}>FASILITAS</h2> 
        <div className={styles.cardsSection}>
          <div className={styles.card}>
            <img src="/mushola.jpg" alt="Mushola" className={styles.cardImage} />
            <h3>Mushola</h3>
          </div>
          <div className={styles.card}>
            <img src="/kamar-mandi.jpg" alt="Kamar Mandi" className={styles.cardImage} />
            <h3>Kamar Mandi</h3>
          </div>
          <div className={styles.card}>
            <img src="/area-parkir.jpg" alt="Area Parkir" className={styles.cardImage} />
            <h3>Area Parkir</h3>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className={styles.mapsSection}>
        <h2>Lokasi Kami</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8268959344914!2d114.36689487405712!3d-8.220156882497468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14532bd275273%3A0xa5f61825fa5f4bfe!2sScudetto%20Futsal%20Banyuwangi!5e0!3m2!1sid!2sid!4v1731242617112!5m2!1sid!2sid"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
           {/* Right: Logo and Text */}
           <div className={styles.right}>
            <img src="/futsal-logo.jpg" alt="Futsal Logo" className={styles.logoImage} />
          </div>

          {/* Center: Address */}
          <div className={styles.center}>
            <p>Hubungi Kami</p>
            <p>Alamat Lapangan: Jl. Letjen Sutoyo No.1, Banyuwangi, Jawa Timur</p>
            <p>No Hp. 082345681234</p>
            <p>Futsalbanyuwangi@gmail.com</p>
          </div>

          {/* Left: Social Media Links */}
          <div className={styles.left}>
            <h4>Social Media</h4>
            <p><a href="https://instagram.com/futsal_banyuwangi" target="_blank" rel="noopener noreferrer">Instagram: futsal_banyuwangi</a></p>
            <p><a href="https://facebook.com/futsalbanyuwangi" target="_blank" rel="noopener noreferrer">Facebook: futsalbanyuwangi</a></p>
            <p><a href="https://tiktok.com/@futsalbanyuwangi23" target="_blank" rel="noopener noreferrer">TikTok: futsalbanyuwangi23</a></p>
          </div>
         
        </div>
      </footer>

    </>
  );
}