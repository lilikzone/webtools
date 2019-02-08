import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    {text: 'DashBoard', icon: <Assessment />, link: '/dashboard', menuItem: 'Deneme'},
    {text: 'Form Page', icon: <Web />, link: '/form'},
    {text: 'Table Page', icon: <GridOn />, link: '/table'},
    {text: 'Login Page', icon: <PermIdentity />, link: '/login'},
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'},
    ],
  },
  userTable: {
    items: [
      {id: 1, name: 'Clinton Matthews', price: '$50.00', category: 'Teacher'},
      {id: 2, name: 'Kristen Nelson', price: '$150.00', category: 'Designer'},
      {id: 3, name: 'Everett Allen', price: '$250.00', category: 'Co-Producer'},
      {id: 4, name: 'Marlene Howell', price: '$70.00', category: 'Doctor'},
      {id: 5, name: 'Morris Carroll', price: '$450.00', category: 'Engineer'},
      {id: 6, name: 'Charles Hunter', price: '$950.00', category: 'Styler'},

    ],
  },
  userTable_2: {
    items: [
      {id: 1, pic: './assets/images/people/18.jpg', name: 'Clinton Matthews', price: '$50.00', category: 'Teacher', data: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
      {id: 2, pic: './assets/images/people/19.jpg', name: 'Kristen Nelson', price: '$150.00', category: 'Designer', data: [15, 10, 5, 20, 18, 15]},
      {id: 3, pic: './assets/images/people/13.jpg', name: 'Everett Allen', price: '$250.00', category: 'Co-Producer', data: [25, 10, 36, 20, 52, 98]},
      {id: 4, pic: './assets/images/people/14.jpg', name: 'Marlene Howell', price: '$70.00', category: 'Doctor', data: [15, 10, 25, 20, 48, 52, 36]},

    ],
  },
  products: {
    items: [
      {id: 1, image: './assets/images/products/1.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '5'},
      {id: 2, image: './assets/images/products/2.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '1'},
      {id: 3, image: './assets/images/products/3.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '3'},
      {id: 4, image: './assets/images/products/4.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '4'},
      {id: 5, image: './assets/images/products/5.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '5'},
      {id: 6, image: './assets/images/products/6.jpg', name: 'Mare Store', date: '$16.80', description: 'Basic T-Shirt', favcount: '8'},
      {id: 7, image: './assets/images/products/7.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '6'},
      {id: 8, image: './assets/images/products/8.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '2'},
      {id: 9, image: './assets/images/products/9.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '3'},
      {id: 10, image: './assets/images/products/10.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '2'},
      {id: 11, image: './assets/images/products/11.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '1'},
      {id: 12, image: './assets/images/products/12.jpg', name: 'Mare Store', date: '$46.00', description: 'Cool T-Shirt', favcount: '4'},
    ],
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'},
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780},
    ],

    DailySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780},
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300},
    ],

    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore />},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight />},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess />},
    ],

    CompletedTasks: [
      {Food: 1400, Clothes: 4850, Electronics: 8200},
      {Food: 6898, Clothes: 1600, Electronics: 4600},
      {Food: 9800, Clothes: 3200, Electronics: 3241},
      {Food: 3908, Clothes: 6800, Electronics: 5874},
      {Food: 4800, Clothes: 4500, Electronics: 1589},
      {Food: 3490, Clothes: 5821, Electronics: 2584},
      {Food: 4300, Clothes: 2200, Electronics: 6000},
    ],
    WebsiteViews: [
      {Single: 0, Clothes: 4850, Unique: 6000},
      {Single: 2000, Clothes: 1600, Unique: 5500},
      {Single: 1500, Clothes: 3200, Unique: 4500},
      {Single: 2500, Clothes: 2560, Unique: 5000},
      {Single: 2000, Clothes: 4500, Unique: 4000},
      {Single: 3000, Clothes: 5821, Unique: 4500},
      {Single: 2500, Clothes: 5821, Unique: 3500},
      {Single: 3500, Clothes: 5821, Unique: 4000},
      {Single: 3000, Clothes: 5821, Unique: 3000},
      {Single: 4000, Clothes: 5821, Unique: 3500},
      {Single: 3500, Clothes: 5821, Unique: 2500},
      {Single: 4500, Clothes: 5821, Unique: 3000},
      {Single: 4000, Clothes: 5821, Unique: 2000},
      {Single: 5000, Clothes: 5821, Unique: 2500},
      {Single: 4500, Clothes: 5821, Unique: 1500},
      {Single: 5500, Clothes: 5821, Unique: 2000},


      {Single: 6000, Clothes: 2200, Unique: 0},
    ],
  },
};

export default data;
