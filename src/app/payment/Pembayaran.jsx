"use client";
import { useRouter } from "next/router";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const { nama_lapangan } = router.query; // Ambil nama lapangan dari URL
  const [lapanganInfo, setLapanganInfo] = useState({
    nama_lapangan: "",
    harga_per_jam: 0,
    gambar: ""
  });

  useEffect(() => {
    // Contoh: Panggil API atau ambil data lapangan dari database menggunakan nama_lapangan
    // Set lapanganInfo dengan data yang diperoleh
    if (nama_lapangan) {
      // Sementara, gunakan data statis atau panggilan API yang sesuai
      setLapanganInfo({
        nama_lapangan,
        harga_per_jam: 100000, // Contoh harga per jam
        gambar: "sample-image-id" // Ganti dengan ID gambar Cloudinary yang sesuai
      });
    }
  }, [nama_lapangan]);

  const handlePayment = () => {
    // Fungsi untuk menghandle proses pembayaran, misalnya mengirim data ke backend
    alert(`Pembayaran berhasil untuk lapangan: ${lapanganInfo.nama_lapangan}`);
    router.push('/confirmation'); // Redirect ke halaman konfirmasi atau sukses
  };

  return (
    <div className="container mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Pembayaran untuk {lapanganInfo.nama_lapangan}
      </h1>

      <div className="flex flex-col items-center gap-4">
        <CldImage
          src={lapanganInfo.gambar}
          width="300"
          height="300"
          crop="fill"
          alt={`Gambar Lapangan ${lapanganInfo.nama_lapangan}`}
          className="rounded-lg"
        />

        <div className="text-lg">
          <p>Lapangan: {lapanganInfo.nama_lapangan}</p>
          <p>Harga per jam: Rp {lapanganInfo.harga_per_jam.toLocaleString()}</p>
        </div>

        <button
          onClick={handlePayment}
          className="mt-4 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
