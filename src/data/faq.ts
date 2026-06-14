export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'pesan-antar',
    question: 'Apakah BaksoJawa melayani pesan antar?',
    answer: 'Ya, kami tersedia di semua platform delivery online utama (GoFood, GrabFood, ShopeeFood) serta melayani delivery internal untuk radius 3km dari outlet kami.',
  },
  {
    id: 'daging-sapi',
    question: 'Apakah daging yang digunakan 100% sapi?',
    answer: 'Tentu saja. Kami hanya menggunakan 100% daging sapi bagian tenderloin dan paha belakang berkualitas tinggi tanpa campuran daging lain.',
  },
  {
    id: 'reservasi',
    question: 'Bagaimana jika ingin reservasi untuk acara besar?',
    answer: 'Silakan hubungi WhatsApp marketing kami minimal H-3 untuk reservasi tempat atau pemesanan katering acara pernikahan, arisan, maupun kantor.',
  },
  {
    id: 'jam-buka',
    question: 'Jam berapa operasional outlet BaksoJawa?',
    answer: 'Outlet kami buka setiap hari mulai pukul 10:00 WIB hingga 22:00 WIB. Khusus hari libur nasional, kami tetap buka dengan jam yang sama.',
  },
  {
    id: 'cabang',
    question: 'Di mana saja cabang BaksoJawa berada?',
    answer: 'Saat ini kami memiliki 3 cabang utama di pusat kota dan 2 cabang di area pinggiran. Anda bisa melihat daftar lengkap alamat di halaman outlet kami.',
  },
  {
    id: 'pembayaran',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran tunai (cash), kartu debit/kredit, QRIS, serta e-wallet seperti GoPay, OVO, Dana, dan ShopeePay.',
  },
  {
    id: 'parkir',
    question: 'Apakah tersedia fasilitas parkir yang memadai?',
    answer: 'Ya, semua outlet kami dilengkapi dengan area parkir yang luas, aman, dan gratis untuk kendaraan roda dua maupun roda empat.',
  },
  {
    id: 'menu-anak',
    question: 'Apakah ada menu khusus untuk anak-anak?',
    answer: 'Tentu, kami menyediakan "Paket Bocil" dengan ukuran bakso yang lebih kecil, kuah kaldu yang tidak pedas, dan tambahan sosis sapi favorit anak.',
  },
  {
    id: 'luar-kota',
    question: 'Apakah baksonya bisa dibawa untuk oleh-oleh ke luar kota?',
    answer: 'Sangat bisa! Kami menyediakan kemasan vakum beku (frozen) yang aman untuk perjalanan jauh, lengkap dengan bumbu kuahnya.',
  },
  {
    id: 'halal',
    question: 'Apakah BaksoJawa sudah bersertifikasi Halal?',
    answer: 'Alhamdulillah, semua proses pengolahan, bahan baku, hingga penyajian di restoran kami sudah 100% bersertifikat Halal dari pihak berwenang.',
  },
];
