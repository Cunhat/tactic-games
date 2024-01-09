import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4 md:px-6 mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
        <div>
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/img/logo.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-20 h-20"
              alt="logo-img"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm">Contact us at:</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
          <p className="text-sm">Email: info@acme.com</p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link className="text-white hover:text-blue-500" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link className="text-white hover:text-blue-400" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link className="text-white hover:text-pink-500" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        © Tactic Game All rights reserved.
      </div>
    </footer>
  );
};

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
