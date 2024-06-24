'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";

const NavBar = () => {
  const handleClick = () => {
    window.open('https://calendly.com/fran-brandalise', '_blank');
  };
  
  return (
    <Navbar className='bg-gradient-blueApple fixed w-full'>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between">
        <NavbarBrand className="flex justify-center w-full sm:w-auto sm:justify-start">
          <Link href="#landing">
            <Image alt="logo" src="/logo-blueApple.png" width={100} height={100} />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 justify-center items-center">
          <NavbarItem>
            <Link color="foreground" className="text-white" href="#services">
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-white" href="#aboutUs">
              Sobre Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-white" href="#philosophy">
              Filosofia
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-white" href="#workWithUs">
              Trabajemos
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Button onClick={handleClick} className='text-white font-bold bg-transparent border-2 border-white hover:bg-blue-blueApple'>
              BOOK A FREE DEMO
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}

export default NavBar;
