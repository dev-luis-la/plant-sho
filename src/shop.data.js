const SHOP_DATA = [
  {
    title: 'Monsteras',
    items: [
      {
        id: 1,
        name: 'Deliciosa',
        imageUrl: 'https://images.unsplash.com/photo-1604907899106-bdbf31469ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Variegata',
        imageUrl: 'https://images.unsplash.com/photo-1623325943583-d658515e0889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
        price: 18
      },
      {
        id: 3,
        name: 'Adansonii',
        imageUrl: 'https://images.unsplash.com/photo-1604066538249-f3767aa55545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'Dubai',
        imageUrl: 'https://zielony-parapet.pl/28836-thickbox_default/monstera-dubia.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Obliqua',
        imageUrl: 'https://i.etsystatic.com/20406392/r/il/aa9e6c/2461525484/il_fullxfull.2461525484_lsf0.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Siltepecana',
        imageUrl: 'https://www.bridgestreetbotanical.com/uploads/1/3/1/8/131899262/s406114008655125857_p515_i2_w1080.jpeg',
        price: 14
      },
      {
        id: 7,
        name: 'Pinnatipartita',
        imageUrl: 'https://terrariumtribe.com/wp-content/uploads/2021/04/Monstera-pinnatipartita-600x900-1.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Borsigniana',
        imageUrl: 'https://e2rzkrvccbw.exactdn.com/wp-content/uploads/2021/04/Monstera-Borsigiana-plant.jpg',
        price: 14
      },
    ],
  },
  {
    title: 'Succulents',
    items: [
    {id: 9,
      name: 'Echeveria elegans',
      imageUrl: 'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Echeveria_elegansEr_aD9PU6OMYNd8.jpeg',
      price: 220
    },
    {
      id: 10,
      name: 'Burro-tail',
      imageUrl: 'https://succulentcity.com/wp-content/uploads/2019/03/sedum_morganianum_burros_tail_plant-819x1024.jpg',
      price: 280
    },
    {
      id: 11,
      name: 'Tiger tooth',
      imageUrl: 'https://cdn.shopify.com/s/files/1/2198/4603/products/TIGERTOOTHALOEJUVENNA4_1200x.jpg?v=1629879782',
      price: 110
    },
    {
      id: 12,
      name: 'Fasciated haworthia',
      imageUrl: 'https://plantcaretoday.com/wp-content/uploads/haworthia-potted-1200-630-FB-10312018-min.jpg',
      price: 160
    },
    {
      id: 13,
      name: 'Portulacaria Afra',
      imageUrl: 'https://worldofsucculents.com/wp-content/uploads/2013/05/Portulacaria-afra-f.-variegata-Rainbow-Bush.jpg',
      price: 160
    },
    {
      id: 14,
      name: 'Lily Pad',
      imageUrl: 'https://worldofsucculents.com/wp-content/uploads/2018/06/Aeonium-Lily-Pad3-702x527.jpg',
      price: 190
    }
    ],
  },
  {
    title: 'Indoor Plants',
    items: [
      {
        id: 15,
        name: 'Juniper Bonsai',
        imageUrl: 'https://nayturr.com/wp-content/uploads/2020/08/japanese-juniper-bonsai-guide-Aug282020-1-min.jpg',
        price: 125
      },
      {
        id: 16,
        name: 'String of Pearls',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0068/4215/5090/products/sept18-014_8c493ada-191e-4b24-9fdb-122373918975_480x.jpg?v=1611785849',
        price: 90
      },
      {
        id: 17,
        name: 'Pilea',
        imageUrl: 'https://d3gkbidvk2xej.cloudfront.net/images/products/bce6cd4d-6426-4fa3-8c4c-d007854280de/s/pilea-peperomioides.jpeg?version=1618805055.97190019800&fm=jpeg&w=449&h=598&fit=crop',
        price: 90
      },
      {
        id: 18,
        name: 'Fiddle-Leaf Fig',
        imageUrl: 'https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/products/fiddle_leaf_fig_5.jpg?v=1568215758',
        price: 165
      },
      {
        id: 19,
        name: 'Birds Paradise',
        imageUrl: 'http://cdn.shopify.com/s/files/1/0013/3529/6118/articles/bedroom_01a.jpg?v=1571337943',
        price: 185
      },
    ],
  },
  {
    title: 'Rare plants',
    items: [
      {
        id: 1,
        name: 'Trandescantia Bubblegum',
        imageUrl: 'https://plantly.io/wp-content/uploads/2020/10/nanouk-e1594225952235.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Caladium Hilo Beauty',
        imageUrl: 'https://plantingman.com/wp-content/uploads/2021/03/alocasia-hilo-beauty.webp',
        price: 20
      },
      {
        id: 3,
        name: 'String of Hearts',
        imageUrl: 'https://i.etsystatic.com/19387834/r/il/9f2362/2558121345/il_570xN.2558121345_bjvg.jpg',
        price: 80
      },
      {
        id: 4,
        name: 'Alocasisa Black Velvet',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/ALocasia_Black_Velvet_7_650x.jpg?v=1637158601',
        price: 80
      },
      {
        id: 5,
        name: 'Begonia Maculata',
        imageUrl: 'https://smartgardenguide.com/wp-content/uploads/2019/10/begonia-maculata-care-12.jpg',
        price: 45
      },
      {
        id: 6,
        name: 'String of Turtles',
        imageUrl: 'https://statics.rayagarden.com/20210907/String-of-Turtles-Plant5.jpg',
        price: 135
      },
      {
        id: 7,
        name: 'Watermelon Peperomia',
        imageUrl: 'https://www.thespruce.com/thmb/-bJpCiOMp9IWX67N0w_wJHgQlA4=/3000x2000/filters:fill(auto,1)/watermelon-peperomia-guide-5201470-hero-3e606d43d32b4431863baafd57495704.jpg',
        price: 20
      },
    ],
  },
  {
    title: 'Pots',
    items: [
      {
        id: 1,
        name: 'Black Ceramic',
        imageUrl: 'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202134/0933/modern-black-ceramic-indoor-planters-with-wooden-stand-1-c.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Modern White',
        imageUrl: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202134/1392/modern-white-ceramic-indoor-planters-with-wooden-stand-c.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Zen Square',
        imageUrl: 'https://cb2.scene7.com/is/image/CB2/BloxMdLgSqHiGlossGroupFHS17',
        price: 25
      },
      {
        id: 4,
        name: 'Tall Galvin',
        imageUrl: 'https://cb2.scene7.com/is/image/CB2/BloxPlntrChrcoalTallGroupFHS17',
        price: 25
      },
      {
        id: 5,
        name: 'Long slek',
        imageUrl: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80',
        price: 40
      },
    ],
  },
];

export default SHOP_DATA;