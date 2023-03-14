const data = [
    {
      "id": 1,
      "name": "Gaya Klasik House",
      "price": 10000,
      "image": "/images/testi5.jpeg",
      "detail": "/images/testi5.jpeg",
      "description": "Rumah ala klasik 90's.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2024-07-24"
    },
    {
      "id": 2,
      "name": "Padepokan House",
      "price": 20000,
      "image": "images/testi6.jpeg",
      "detail": "details/gelas 2.jpg",
      "description": "Rumah luas gaya padepokan kuno.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": null
    },
    {
      "id": 3,
      "name": "Minimalist Green House",
      "price": 2392000,
      "image": "images/testi1.jpeg",
      "detail": "details/gelas 3.jpg",
      "description": "Rumah hijau asri.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-10-04"
    },
    {
      "id": 4,
      "name": "Apart Model House",
      "price": 9843980,
      "image": "images/testi3.jpeg",
      "detail": "details/gelas 4.jpg",
      "description": "Beli ini dapat diskon 30%.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": null
    },
    {
      "id": 5,
      "name": "Premium House",
      "price": 3948897,
      "image": "images/testi2.jpeg",
      "detail": "details/gelas 5.jpg",
      "description": "Rumah Mewah Minimalist.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": null
    },
    {
      "id": 6,
      "name": "Dessert House",
      "price": 7890090,
      "image": "images/testi7.jpeg",
      "detail": "details/gelas 6.jpg",
      "description": "Rumah suasana tenang.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": "2022-12-09"
    },
    {
      "id": 7,
      "name": "Mystic House",
      "price": 900000000,
      "image": "images/testi8.jpeg",
      "detail": "details/gelas 7.jpg",
      "description": "Rumah Misteri.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": "2022-11-04"
    },
    {
      "id": 8,
      "name": "Anti Tetangga House",
      "price": 7839200,
      "image": "images/testi9.jpeg",
      "detail": "details/gelas 8.jpg",
      "description": "Rumah khusus untuk orang mandiri.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": null
    },
    {
      "id": 9,
      "name": "HouCin",
      "price": 62000,
      "image": "images/testi10.jpeg",
      "detail": "details/piring 1.jpg",
      "description": "Rumah nuansa klenteng.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-05-09"
    },
    {
      "id": 10,
      "name": "Pool House",
      "price": 105000,
      "image": "images/testi4.jpeg",
      "detail": "details/piring 2.jpg",
      "description": "Rumah sederhana.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-12-23"
    },
    {
      "id": 11,
      "name": "Flyse",
      "price": 292000,
      "image": "images/testi11.jpeg",
      "detail": "details/piring 3.jpg",
      "description": "Rumah awan.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": null
    },
    {
      "id": 12,
      "name": "Tobat'Se",
      "price": 289000,
      "image": "images/testi12.jpeg",
      "detail": "details/piring 4.jpg",
      "description": "Rumah Terjun.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": "2022-06-18"
    },
    {
      "id": 13,
      "name": "Luxiouse'S",
      "price": 93000,
      "image": "images/testi13.jpeg",
      "detail": "details/piring 5.jpg",
      "description": "Rumah Super Luxury.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": null
    },
    {
      "id": 14,
      "name": "Setengah Setengah House",
      "price": 492000,
      "image": "images/testi14.jpeg",
      "detail": "details/piring 6.jpg",
      "description": "Rumah custom warna cat.",
      "category": "Kuno",
      "expiryDate": "2022-09-29"
    },
    {
      "id": 15,
      "name": "Omah Mini",
      "price": 21000,
      "image": "images/testi15.jpeg",
      "detail": "details/teko 1.jpg",
      "description": "Rumah super mini untuk peliharaanmu.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": null
    },
    {
      "id": 16,
      "name": "SunsetHo",
      "price": 447000,
      "image": "images/testi16.jpeg",
      "detail": "details/teko 2.jpg",
      "description": "Rumah Senja sore.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-12-17"
    },
    {
      "id": 17,
      "name": "Land House",
      "price": 277000,
      "image": "images/testi17.jpeg",
      "detail": "details/teko 3.jpg",
      "description": "Rumah tanah sederhana.",
      "isDeleted": false,
      "category": "Kuno",
      "expiryDate": null
    },
    {
      "id": 18,
      "name": "Houflow",
      "price": 150000,
      "image": "images/testi18.jpeg",
      "detail": "details/teko 4.jpg",
      "description": "Rumah untuk pecinta bunga.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-05-18"
    },
    {
      "id": 19,
      "name": "Old-en House",
      "price": 76000,
      "image": "images/testi19.jpeg",
      "detail": "details/teko 5.jpg",
      "description": "Rumah koleksi mobil.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": null
    },
    {
      "id": 20,
      "name": "Tebing Minimalist House",
      "price": 367000,
      "image": "images/testi20.jpeg",
      "detail": "details/teko 6.jpg",
      "description": "Rumah uji nyali.",
      "isDeleted": false,
      "category": "Mewah",
      "expiryDate": "2022-06-05"
    }
  ]

  export default data;