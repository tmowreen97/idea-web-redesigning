import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const router = useRouter();

  // console.log(router.asPath)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#C8AEC7');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{delay:0.6, duration:1}}}
      style={{ backgroundColor: `${color}`, opacity:50}}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 tracking-wider'
    >
      <div className='w-screen  m-auto flex justify-between items-center p-2 text-white'>
        <motion.div
        
        >
          <Link href='/'>
            {/* style={{ color: `${textColor}` }} */}
            <Image src={'/assets/idea-logo.png'} width={200} height={100} alt={'logo'} />
          </Link>
        </motion.div>
        
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {/* <li className='p-4'>
            <Link href='/'>Home</Link>
          </li> */}
          <li className='p-4'>
          <div className="dropdown inline-block relative">
          <button className="inline-flex items-center" id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}>
            <div className="mr-1 tracking-wider ">About</div>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
            <li className="bg-slate-300/70 hover:bg-slate-600/70 hover:text-[#f5f5f5] ml-[-20px] rounded-xl">
              <Link className="p-2 block mb-1" href={'/#about'}>About Us</Link>
            </li>
            <li className="bg-slate-300/70 hover:bg-slate-600/70 hover:text-[#f5f5f5] ml-[-30px] rounded-xl">
              <Link className="p-2 block" href={'/team'}>Our Team</Link>
            </li>
          </ul>
        </div>
          </li> 
          <li className='p-4'>
          <div className="dropdown inline-block relative">
          <button className="inline-flex items-center" id={router.asPath == '/#projects' || router.asPath == '/portfolio' ? "active" : ''}>
            <span className="mr-1 tracking-wider">Projects</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
            <li className="bg-slate-300/70 hover:bg-slate-600/70 hover:text-[#f5f5f5] ml-[-60px] rounded-xl">
              <Link className="p-2 block mb-1" href={'/#projects'}>Recent Projects</Link>
            </li>
            <li className="bg-slate-300/70 hover:bg-slate-600/70 hover:text-[#f5f5f5] ml-[-10px] rounded-xl">
              <Link className="p-2 block" href={'/portfolio'}>Portfolio</Link>
            </li>
          </ul>
        </div>
            {/* <Link href='/#projects'>Projects</Link> */}
          </li>
          <li className='p-4'>
            <Link href='/services' id={router.pathname == "/services" ? "active" : ""}>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/clients' id={router.pathname == "/clients" ? "active" : ""}>Clients</Link>
          </li>
          <li className='p-4'>
            <Link href='/culture' id={router.pathname == "/culture" ? "active" : ""}>Culture</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact' id={router.pathname == "/contact" ? "active" : ""}>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        {/* <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div> */}
        {/* Mobile Menu */}
        {/* <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Navbar;