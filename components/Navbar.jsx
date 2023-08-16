import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({setLightLogo, lightLogo}) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  
  const router = useRouter();

  console.log(router.asPath)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // if (router.asPath == '/'){
    //   setLightLogo(false)
    // }
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#A593B1');
        setTextColor('#000000');
        if (setLightLogo) {
          setLightLogo(true)
        }
      } else {
        setColor('transparent');
        if (setLightLogo) {
          setLightLogo(false)
        }
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{delay:0.6, duration:1}}}
      style={{ backgroundColor: `${color}`, opacity:40}}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 tracking-wider'
    >
      <div className='w-screen  m-auto flex justify-between items-center p-2 text-white ml-1'>
        <motion.div
        
        >
          <Link href='/'>
            {/* style={{ color: `${textColor}` }} */}
            {lightLogo ? <Image src={'/assets/light-logo-2.png'} width={200} height={100} alt={'light_logo'} /> : <Image src={'/assets/dark-logo.png'} width={100} height={100} alt={'dark_logo'} className="ml-5"/>}
          </Link>
        </motion.div>
        
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {/* <li className='p-4'>
            <Link href='/'>Home</Link>
          </li> */}
          <li className='p-4'>
          <div className="dropdown inline-block relative">
          <button className="inline-flex items-center " id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}>
            <div className="mr-1 tracking-wider ">About</div>
            <BiChevronDown />
            {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
            <li className="bg-button_bg hover:bg-accent_2/80 hover:text-primary_text ml-[-20px] rounded-xl">
              <Link className="p-2 block mb-1" href={'/#about'}>About Us</Link>
            </li>
            <li className="bg-button_bg hover:bg-accent_2/80 hover:text-primary_text ml-[-30px] rounded-xl">
              <Link className="p-2 block" href={'/team'}>Our Team</Link>
            </li>
          </ul>
        </div>
          </li> 
          <li className='p-4'>
          <div className="dropdown inline-block relative">
          <button className="inline-flex items-center" id={router.asPath == '/#projects' || router.asPath == '/portfolio' ? "active" : ''}>
            <span className="mr-1 tracking-wider">Projects</span>
            <BiChevronDown />
            {/* <svg className="fill-current h-4 w-4 hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
            <li className="bg-button_bg hover:bg-accent_2/80 hover:text-primary_text ml-[-55px] rounded-xl">
              <Link className="p-2 block mb-1" href={'/#projects'}>Recent Projects</Link>
            </li>
            <li className="bg-button_bg hover:bg-accent_2/80 hover:text-primary_text ml-[-10px] rounded-xl">
              <Link className="p-2 block" href={'/portfolio'}>Portfolio</Link>
            </li>
          </ul>
        </div>
            {/* <Link href='/#projects'>Projects</Link> */}
          </li>
          <li className='m-2 p-2 hover:bg-accent_2/60 hover:text-primary_text rounded-xl'>
            <Link href='/services' id={router.pathname == "/services" ? "active" : ""}>Services</Link>
          </li>
          <li className='m-2 p-2 hover:bg-accent_2/60 hover:text-primary_text rounded-xl'>
            <Link href='/culture' id={router.pathname == "/culture" ? "active" : ""}>Culture</Link>
          </li>
          {/* <li className='p-4'>
            <Link href='/clients' id={router.pathname == "/clients" ? "active" : ""}>Clients</Link>
          </li> */}
          <li className='m-2 p-2 hover:bg-accent_2/60 hover:text-primary_text rounded-xl'>
            <Link href='/contact' id={router.pathname == "/contact" ? "active" : ""}>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0  flex justify-evenly text-justify items-center w-full h-screen bg-dark_bg ease-in duration-300 tracking-wider'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dark_bg text-center ease-in duration-300 tracking-wider'
          }
        >
          
          <ul>
          <div className='flex justify-center'>
              <Image src={'/assets/clip-1.png'} width={68} height={60} className="m-2"/>
              <Image src={'/assets/clip-2.png'} width={60} height={60} className="m-2"/>
              <Image src={'/assets/clip-3.png'} width={60} height={60} className="m-2"/>
              <Image src={'/assets/clip-4.png'} width={60} height={60} className="m-2"/>

            </div>
            <ul className="justify-center">

            
            
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 text-center'>
              <Link href='/' id={router.pathname == "/" ? "active" : ""}>Home</Link>
            </li>
            <li  className=' hover:text-gray-500 text-4xl p-4 text-center'>
              <div className="dropdown inline-block relative">
                <button className="inline-flex items-center " id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}>
                  <div className="relative">About</div>
                  <BiChevronDown />
                  {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
                </button>
                <ul className="dropdown-menu absolute left-0 hidden text-gray-70 text-center z-10">
                  <li onClick={handleNav} className="bg-button_bg hover:bg-accent_2 hover:text-primary_text text-dark_text rounded-xl text-4xl p-2 w-[200px] m-2 ">
                    <Link className="block " href={'/#about'}>About Us</Link>
                  </li>
                  <li onClick={handleNav} className="bg-button_bg hover:bg-accent_2 hover:text-primary_text text-dark_text rounded-xl text-4xl p-2 w-[200px] m-2">
                    <Link className="block" href={'/team'}>Our Team</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500 text-center'>
            <div className="dropdown inline-block relative">
                <button className="inline-flex items-center " id={router.asPath == '/#projects' || router.asPath == '/portfolio' ? "active" : ''}>
                  <div className="relative">Projects</div>
                  <BiChevronDown />
                  {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
                </button>
                <ul className="dropdown-menu absolute left-0 hidden text-gray-70 text-center z-10">
                  <li onClick={handleNav} className="bg-button_bg hover:bg-accent_2 hover:text-primary_text text-dark_text rounded-xl text-4xl p-2 w-[275px] m-2 ">
                    <Link className="block " href={'/#projects'}>Recent Projects</Link>
                  </li>
                  <li onClick={handleNav} className="bg-button_bg hover:bg-accent_2 right-0 hover:text-primary_text text-dark_text rounded-xl text-4xl p-2 w-[200px] m-2">
                    <Link className="block" href={'/portfolio'}>Portfolio</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 text-center'>
              <Link href='/services' id={router.pathname == "/services" ? "active" : ""}>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 text-center'>
              <Link href='/culture' id={router.pathname == "/culture" ? "active" : ""}>Culture</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 text-center'>
              <Link href='/contact' id={router.pathname == "/contact" ? "active" : ""}>Contact Us</Link>
            </li>
            </ul>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;