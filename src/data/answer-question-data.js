const answer_question_data = [
  {
    id: 1,
    question: "Bagaimana proses transaksi menggunakan gateway pembayaran di website ini?",
    answer: <>Pilih produk atau layanan yang diinginkan. Setelahnya, Anda akan diarahkan ke halaman pembayaran. Di sana, lengkapi detail pembayaran Anda, dan cukup klik tombol "Bayar". Gateway pembayaran kami akan segera dan aman memproses transaksi Anda secara efisien.</> ,
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne", 
    actice: "",
  },
  {
    id: 2,
    question: "Seberapa amankah penggunaan gateway pembayaran?",
    answer: <>Keamanan adalah prioritas utama kami. Gateway pembayaran kami menggunakan enkripsi tingkat tinggi untuk melindungi informasi pembayaran Anda. Kami juga mematuhi standar keamanan industri untuk memastikan transaksi yang aman dan terjamin.</> ,
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: true,
    aria_controls: "collapseTwo",
    show: true,
    actice: "",

  },
  {
    id: 3,
    question: "Metode pembayaran apa yang didukung?",
    answer: <>Kami mendukung berbagai metode pembayaran, termasuk kartu kredit, transfer bank, dan opsi pembayaran digital. Dengan opsi ini, kami berusaha memberikan kenyamanan maksimal bagi pengguna.</> ,
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
    actice: "",

  },
  {
    id: 4,
    question: "Cara menangani kendala teknis?",
    answer: <>Hubungi dukungan 24/7 melalui chat atau email untuk bantuan cepat dan efisien.</> ,
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour", 
    actice: "",

  },
  {
    id: 5,
    question: "Apakah ada biaya tambahan?",
    answer: <>Biaya transparan ditampilkan sebelum pembayaran tanpa biaya tersembunyi.</> ,
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive", 
    actice: "",

  }, 
];
export default answer_question_data;
