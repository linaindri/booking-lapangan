"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CardLapangan(props) {
    const router = useRouter();
    const { nama_lapangan, harga_per_jam, gambar } = props;

    return (
            // <p className="text-red">test</p>
            
            <div className="block max-w-full p-6 bg-red border 
            border-gray-200 rounded-lg shadow hover:bg-gray-100 
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex items-center space-x-4">
                <CldImage
                    className="rounded-lg"
                    src={gambar}
                    width="150"
                    height="150"
                    alt="gambar"
                    crop={{
                        type: 'auto',
                        source: true,
                    }}
                />
                <div>
                    <Link href={`/payment/Pembayaran/${nama_lapangan}`}>
                        <h1 className="text-xl font-semibold text-blue-600 hover:underline">
                            {nama_lapangan}
                        </h1>
                    </Link>
                    <p className="text-red-300">Harga Perjam : {harga_per_jam}</p>
                    <button
                        className="mt-2 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500
                        focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5
                        dark:focus:ring-yellow-900"
                        onClick={() => router.push(`/payment/Pembayaran/${nama_lapangan}`)}>
                        Pesan
                    </button>
                </div>
            </div>
        </div>
    );
}
