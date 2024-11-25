// about.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang Kami - Penyewaan Lapangan</title>
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <img src="/futsal-logo.jpg" alt="Logo" className={styles.logoImage} />
        <ul className={styles.navLinks}>
          <div className={styles.left}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/daftar">Daftar Lapangan</Link></li> 
          </div>
          <div className={styles.right}>
            <li><Link href="/about">About</Link></li> 
          </div>
        </ul>
      </nav>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <Image
          src="/lapangan-futsal.jpg" 
          alt="Tentang Kami"
          width={800}
          height={400}
          className={styles.aboutImage}
        />
        <div className={styles.aboutContent}>
          <h2>Tentang Kami</h2>
          <p>
            Kami menyediakan lapangan futsal dengan kualitas terbaik di Banyuwangi, Jawa Timur. 
            Fasilitas lengkap seperti mushola, kamar mandi, dan area parkir siap memudahkan para 
            pengunjung. Dengan komitmen untuk memberikan pengalaman bermain yang nyaman dan aman, 
            kami terus berupaya untuk menyediakan lapangan yang berkualitas bagi para pemain futsal 
            dari berbagai kalangan. Ayo bergabung dan rasakan pengalaman bermain futsal yang berbeda 
            bersama kami!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.right}>
            <img src="/futsal-logo.jpg" alt="Futsal Logo" className={styles.logoImage} />
          </div>
          {/* Address */}
          <div className={styles.center}>
            <p>Hubungi Kami</p>
            <p>Alamat Lapangan: Jl. Letjen Sutoyo No.1, Banyuwangi, Jawa Timur</p>
            <p>No Hp. 082345681234</p>
            <p>Futsalbanyuwangi@gmail.com</p>
          </div>

          {/* Social Media */}
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
