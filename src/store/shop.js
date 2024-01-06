export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        description:
          'Новые "Энергетичные" Кроссовки - Стиль и Комфорт в Каждом Шаге!🚀 Максимальный Комфорт: Легкие и поддерживающие технологии амортизации.🌈 Стильный Дизайн: Энергичный вид, идеальный как для тренировок, так и для повседневной носки.🛡️ Прочные Материалы: Высококачественные, долговечные материалы для надежной защиты.🌐 Универсальные: Подходят для тренировок и повседневного использования.',
        img: require('../assets/img/1.png'),
        gallery: [
          { name: 'Nike Red boots first', img: require('../assets/img/1.png') },
          {
            name: 'Nike Red boots second',
            img: require('../assets/img/2.png'),
          },
          { name: 'Nike Red boots thrid', img: require('../assets/img/3.png') },
        ],
      },
      {
        id: 2,
        title: 'Nike Green',
        description: 'Новые "Энергетичные" Кроссовки - Стиль и Комфорт в Каждом Шаге!🚀 Максимальный Комфорт: Легкие и поддерживающие технологии амортизации.🌈 Стильный Дизайн: Энергичный вид, идеальный как для тренировок, так и для повседневной носки.🛡️ Прочные Материалы: Высококачественные, долговечные материалы для надежной защиты.🌐 Универсальные: Подходят для тренировок и повседневного использования.',
        img: require('../assets/img/7.png'),
        gallery: [
          {
            name: 'Nike Green boots first',
            img: require('../assets/img/7.png'),
          },
          {
            name: 'Nike Green boots second',
            img: require('../assets/img/8.png'),
          },
          {
            name: 'Nike Green boots thrid',
            img: require('../assets/img/9.png'),
          },
        ],
      },
      {
        id: 3,
        title: 'Nike Street',
        description: 'Новые "Энергетичные" Кроссовки - Стиль и Комфорт в Каждом Шаге!🚀 Максимальный Комфорт: Легкие и поддерживающие технологии амортизации.🌈 Стильный Дизайн: Энергичный вид, идеальный как для тренировок, так и для повседневной носки.🛡️ Прочные Материалы: Высококачественные, долговечные материалы для надежной защиты.🌐 Универсальные: Подходят для тренировок и повседневного использования.',
        img: require('../assets/img/4.png'),
        gallery: [
          {
            name: 'Nike Street boots first',
            img: require('../assets/img/4.png'),
          },
          {
            name: 'Nike Street boots second',
            img: require('../assets/img/5.png'),
          },
          {
            name: 'Nike Street boots thrid',
            img: require('../assets/img/6.png'),
          },
        ],
      },
      {
        id: 4,
        title: 'Nike Street Style',
        description: 'Новые "Энергетичные" Кроссовки - Стиль и Комфорт в Каждом Шаге!🚀 Максимальный Комфорт: Легкие и поддерживающие технологии амортизации.🌈 Стильный Дизайн: Энергичный вид, идеальный как для тренировок, так и для повседневной носки.🛡️ Прочные Материалы: Высококачественные, долговечные материалы для надежной защиты.🌐 Универсальные: Подходят для тренировок и повседневного использования.',
        img: require('../assets/img/10.png'),
        gallery: [
          {
            name: 'Nike Street Style boots first',
            img: require('../assets/img/10.png'),
          },
          {
            name: 'Nike Street Style boots second',
            img: require('../assets/img/11.png'),
          },
          {
            name: 'Nike Street Style boots thrid',
            img: require('../assets/img/12.png'),
          },
        ],
      },
    ],
  },
  // setters
  mutations: {},
  actions: {},
  // getters
  getters: {
    getShopList(state) {
      return state.shopList;
    },
    getProduct: (state) => (id) => {
      return state.shopList.find((product) => product.id == id);
    },
  },
};
