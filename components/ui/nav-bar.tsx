"use client";
import React from "react";
import { Icons } from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="p-3 flex justify-between items-center sticky top-0 z-50 w-full bg-black">
      <Image src="/img/logo.png" width={60} height={60} alt="logo-img" />
      <Icons.menu className="h-8 w-8" onClick={() => setShow(!show)} />
      {show && (
        <div className="pt-[20%] p-4 absolute top-0 left-0 right-0 bottom-0 bg-black h-screen w-screen flex flex-col gap-[10%] items-center">
          <Image
            src="/img/logo.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
            alt="logo-img"
          />
          <Icons.close
            className="h-8 w-8 absolute top-4 right-4"
            onClick={() => setShow(!show)}
          />
          <ul className="flex flex-col gap-[5%] h-full">
            <li className="text-3xl font-semibold text-center">Início</li>
            <li className="text-3xl font-semibold text-center">Incrições</li>
            <li className="text-3xl font-semibold text-center">Regulamento</li>
            <li className="text-3xl font-semibold text-center">Galeria</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
