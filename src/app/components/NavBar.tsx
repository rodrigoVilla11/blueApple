'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

const NavBar = () => {
  const handleClick = () => {
    window.open('https://calendly.com/fran-brandalise', '_blank');
  };
  return (
    <Navbar className='bg-gradient-blueApple fixed'>
      <NavbarBrand>
      <Link color="foreground" href="#landing">
        <Image alt="logo" src="/logo-blueApple.png" width={100} height={100} />
        </Link>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#services">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#aboutUs">
            Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#philosophy">
            Filosofia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#workWithUs">
            Trabajemos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={handleClick} className='text-white font-bold bg-transparent border-2 border-white hover:bg-blue-blueApple'>
            BOOK A FREE DEMO
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
