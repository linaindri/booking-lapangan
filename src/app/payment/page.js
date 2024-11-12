import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Payment.module.css';

const Pembayaran = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Halaman Pembayaran</title>
        </Head>

        {/* Navbar */}
        <nav className={styles.navbar}>
          <img src="/futsal-logo.jpg" alt="Logo" className={styles.logoImage} />
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/daftar">Daftar Lapangan</Link></li>
          </ul>
        </nav>

        {/* Pembayaran Section */}
        <section className={styles.paymentSection}>
          <h2>Detail Pembayaran</h2>
          <div className={styles.paymentDetails}>
            <p>Lapangan: Lapangan 1</p>
            <p>Harga: 100.000</p>
            <p>Total: 100.000</p>

            {/* Form Pembayaran */}
            <form className={styles.paymentForm}>
              <label htmlFor="paymentMethod">Metode Pembayaran:</label>
              <select id="paymentMethod" name="paymentMethod">
                <option value="bankTransfer">Transfer Bank</option>
                <option value="creditCard">Kartu Kredit</option>
                <option value="eWallet">E-Wallet</option>
              </select>

              <button type="submit" className={styles.payButton}>Bayar</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInfo}>
            <p>Hubungi Kami</p>
            <p>Alamat Lapangan: Jl. Letjen Sutoyo No.1, Banyuwangi, Jawa Timur</p>
            <p>No Hp. 082345681234</p>
            <p>Futsalbanyuwangi@gmail.com</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pembayaran;
