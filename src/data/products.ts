export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  badge?: {
    text: string;
    type: 'gold' | 'red';
  };
}

export const products: Product[] = [
  {
    id: 'urat-jumbo',
    name: 'Bakso Urat Jumbo',
    price: 'Rp 35k',
    description: 'Bakso bertekstur kasar yang kaya akan serat daging sapi murni. Sangat marem!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuYr6iOlmE1RO4_1Vr-VXoBADLTCjjlPMYzDYUK0gNSNLklkMzRX-lsxSJx9XX8q38Q3mRVHeVDo4o_PoMJUsDadDROs3XPWXY2JbwaFIFLxgVooGz_KT_Syv3EZfeyDf9ozCvAZt7gIl1XNEFrgDld85eOFduk6vMcnP0j8rXO5PQURz4kOWd0RsTOIhXOqsKsbYD3xUzLW8va292_xki2vpxNEaOuqKoxWUflILeoumyFVECsE4zLmeTDhTSbLM_0JcVaaHv9Q',
    alt: 'A macro shot of a Bakso Urat Jumbo dish',
    badge: {
      text: 'BEST SELLER',
      type: 'gold',
    },
  },
  {
    id: 'halus-premium',
    name: 'Halus Premium',
    price: 'Rp 30k',
    description: 'Bakso dengan tekstur selembut sutra, dibuat dari bagian daging sapi pilihan tanpa lemak.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLazNDDjUIziD10wu3S49EAeQVfUHyG6nMKY2ZAI8hSFXwCxATcLlOmLGErJkgfOD5QtGznpJ27XZvCzO8p-1vv_hH8-pCb0N4z1NHAhAtesvH0Vey8j7J9xFIbawH7nRj3-VX7-w3-AXT1Ho6_qkzFnRGO-K1Q0_MS1TsQzhuazrqni0q1oqOb9XKvpR1av25r47Q90ZKdHePEOKSigW6LmPkMdpMXox5LowcA00KTijs8BP1BheL1wRLRoAglZJxxlGFJsmsXA',
    alt: 'Close-up of Bakso Halus Premium',
  },
  {
    id: 'bakso-mercon',
    name: 'Bakso Mercon',
    price: 'Rp 32k',
    description: 'Isian cabai rawit melimpah yang meledak di mulut. Khusus bagi pecinta pedas sejati.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9iZ4NuWT5RhtxKqKmgw0pxDOQK0CJh0l7bLinzsMwmd2N4TW_FJl2MdsIjPnKHWNznuK9j3YxgMO9iTMvQWDvjvmInQ4VVAOmyZ1J7oHZuClW5kefN_AQZxTXC-6ppDmQdzZI7S3p-U3Upjr_y5-dn_6q1kUcDRq5kTorlgvlwA0ekVJ6jtbsAN6xwMUsE3HNYcaFAtMqdSsrnbrEpYyEfMUbXTMA0-9ZFEa4OYuu7vNq1Xg0Q_9cUput-_nsw8XVnQHtA6p4PQ',
    alt: 'A vibrant and intense photo of Bakso Mercon',
    badge: {
      text: 'HOT & SPICY',
      type: 'red',
    },
  },
  {
    id: 'keju-lumer',
    name: 'Keju Lumer',
    price: 'Rp 34k',
    description: 'Perpaduan daging sapi gurih dengan lelehan keju mozzarella premium di dalamnya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjLrLF0z7a7L7yX4Ka0p3k8OSnSOnM8SAMO6Ye3BUwelX_cXGBjDltn3HXlUhxh4iAWCNkW7mpVn_MUkmYsJkSGHWEHyd25TNEft0iF3-tSMfhnOm8tSdp4l-p0snYSi6eEF2sRDZyNyU80QmxBglcBZ-nE7ftgOUlg1WI6vmizzaltSyV5lrqwHnghYOJ6EOCJnke7WmxoHFuDhYmg45qWpdX2qWqrv3adAXiQSpHinJCY8QuJx7Vigff1aWmknQJDBkx6ifV7g',
    alt: 'Modern food photography of Bakso Keju Lumer',
  },
  {
    id: 'bakso-beranak',
    name: 'Bakso Beranak',
    price: 'Rp 45k',
    description: 'Bakso raksasa yang berisi anak-anak bakso kecil dan telur puyuh di dalamnya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA841kgmd35AS8rtV4jXcIQcV4LBoj2yKTmv_WHJlLOTozgK9tWRf5VCrjskB3BF2OjLztBSnWhCaf0ji4WgnciLa1i15nxLI0V4gsr4LlbkSaBks0BzFZpqZCtkvajrdrbc4hs0PDApqCQZEihyoLCss4su6TF1FWdi3u0J6sm4y-YSLG-vo7Uz4ABUpsdDeM-_uOqX-aYYRdOSvs1paVVyD2Kvjk6DcWsjId10Zlr9lponojDk9aclGmtRegxetuxxPgqjtYzbw',
    alt: 'Epic shot of Bakso Beranak in a large stone bowl',
  },
  {
    id: 'spesial-komplit',
    name: 'Spesial Komplit',
    price: 'Rp 50k',
    description: 'Kombinasi semua varian bakso dalam satu mangkuk royal. Puas maksimal!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQbQ0_6N7aR1raplkjy20XphNv-yNchRlHbkkeJzfFVdphlDPL0vpsDavmNLu5W7VEWBCg20msvSNiyOD_dBA_EtpHtGaLcr-ex516uZlqulNKB_TdRM6PdyNlWox4sjqTEtztqKiL8GcGx75_622rEi2ttEO_yR09nyDMi-rJVaAfXzzj-y2sV0aTe64CCiyCwDA_RUhxrfuo7fJIWWI4HKujNiTK_zk7GHH1vI8fN5wWQi50Lt9oVAAjdk5kox3T9jBTQLOlVw',
    alt: 'Luxury presentation of Spesial Komplit bakso',
  },
  {
    id: 'bakso-goreng',
    name: 'Bakso Goreng (Basreng)',
    price: 'Rp 25k',
    description: 'Bakso sapi yang digoreng hingga renyah di luar namun tetap kenyal di dalam. Cocok untuk camilan.',
    image: '/images/bakso_goreng.png',
    alt: 'Bakso Goreng crispy',
  },
  {
    id: 'bakso-jamur',
    name: 'Bakso Jamur Merang',
    price: 'Rp 28k',
    description: 'Paduan daging sapi segar dengan potongan jamur merang yang memberikan sensasi tekstur unik.',
    image: '/images/bakso_jamur.png',
    alt: 'Bakso Jamur Merang',
  },
  {
    id: 'bakso-tulang-rangu',
    name: 'Bakso Tulang Rangu',
    price: 'Rp 38k',
    description: 'Sensasi kriuk tulang rangu rawan sapi di setiap gigitan, dicampur dalam adonan bakso premium.',
    image: '/images/bakso_tulang_rangu.png',
    alt: 'Bakso Tulang Rangu',
    badge: {
      text: 'NEW',
      type: 'red',
    },
  },
];
