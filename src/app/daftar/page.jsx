import supabase from '../../../utils/supabase';
import CardLapangan from '../component/cardLapangan';


export default async function Daftar_Lapangan()  {
  const { data: lapangan, error } = await supabase.from("lapangan").select().order("id", { ascending: true });
  console.log(lapangan);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className='w-3/4 p-4 flex flex-wrap gap-4'>
      {lapangan && lapangan.map((lpl, idx) => (
          <CardLapangan
            key = {idx}
            nama_lapangan = {lpl.nama_lapangan}
            lokasi_lapangan = {lpl.lokasi_lapangan}
            harga_per_jam = {lpl.harga_per_jam}
            gambar = {lpl.gambar}
          />
        ))}
      </div>
    </>
  );
};

