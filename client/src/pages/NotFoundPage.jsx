import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-slate-600 mt-4 max-w-md">
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>

        <button
          onClick={() => navigate('/')}
          className="primary-button mt-8"
        >
          Kembali ke Beranda
        </button>

      </main>

      <Footer />

    </div>
  );
}