import { ImOffice } from 'react-icons/im';
import { BsHouse } from 'react-icons/bs';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { GiGreenhouse } from 'react-icons/gi';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    page: '/',
  },
  {
    id: 'property',
    title: 'Property',
    page: '/',
  },
];

export const properties = [
  {
    id: 1,
    icon: <BsHouse />,
    title: 'Apartment',
    text: '2000 properties',
  },
  {
    id: 2,
    icon: <ImOffice />,
    title: 'Office',
    text: '800 properties',
  },
  {
    id: 3,
    icon: <GiGreenhouse />,
    title: 'Studio',
    text: '500 properties',
  },
  {
    id: 4,
    icon: <TbBuildingWarehouse />,
    title: 'Store',
    text: '300 properties',
  },
];

export const rentProperty = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1678108769/my-realestate/property-3_z3nssw.png',
    title: 'For rent',
    bedroomType: '2 Bedroom Apartment',
    location: '210 Zirak Road, Canada',
    price: '$3,500/month',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1678108769/my-realestate/property-2_jzxnuk.png',
    title: 'For rent',
    bedroomType: '3 Bedroom Apartment',
    location: '151 James Road, USA',
    price: '$5,00/month',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1678108582/my-realestate/home_xcl0qh.png',
    title: 'For rent',
    bedroomType: 'A beautiful studio',
    location: '320 Bond Joe Street, USA',
    price: '$2,500/month',
  },
];

export const amenities = [
  {
    id: 1,
    items: 'Laundry Room',
  },
  {
    id: 2,
    items: 'Car Parking',
  },
  {
    id: 3,
    items: 'Gym',
  },
  {
    id: 4,
    items: 'Swimming Pool',
  },
];
