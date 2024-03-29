"use client";
import * as React from "react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="p-4 fixed top-0 z-50 w-full bg-black sm:gap-24 justify-center flex">
      <div className="container flex w-full justify-between sm:justify-center ">
        <Image src="/img/logo.png" width={60} height={60} alt="logo-img" />
        <Icons.menu
          className="h-8 w-8 sm:hidden"
          onClick={() => setShow(!show)}
        />
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
            <ListOfPages />
          </div>
        )}
        <ListOfPages className="hidden sm:flex sm:ml-auto sm:items-center" />
        <div className="hidden sm:block sm:ml-auto"></div>
      </div>
    </nav>
  );
};

const ListOfPages: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul
    className={cn(
      "flex flex-col gap-[5%] h-full sm:flex-row sm:gap-6 ",
      className
    )}
    {...props}
  >
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      INÍCIO
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      INSCRIÇÕES
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      REGULAMENTO
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      GALERIA
    </li>
  </ul>
);
