import { navLinks } from '@/constants';
import Link from 'next/link';
// import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='px-20 bg flex items-center py-5'>
      <Link href='/'>
        {/* <Image src='/damlaf-logo.png' alt='logo' width={200} height={200} /> */}
        <p className='text-2xl font-bold text-white'>Damlaf Multiventures</p>
      </Link>

      <ul className='hidden flex-1 items-center justify-end md:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-lg ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } font-bold text-white`}
          >
            <Link href={`${nav.page}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
