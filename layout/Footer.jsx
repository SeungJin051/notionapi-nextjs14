import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100 dark:bg-gray-950 dark:text-slate-400">
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <Link href="/">
            <Image
              src="/GDSCUTM-Bracket.png"
              alt="GDSCUTM-Bracket.png"
              width={55}
              height={55}
            />
          </Link>

          <span className="ml-3 text-xl dark:text-white">GDSC DEU</span>
          <p className="mt-4 text-sm sm:ml-6 sm:mt-0">
            © 2024 GDSC DEU —
            <Link
              href="https://github.com/SeungJin051"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              @SeungJin051
            </Link>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link className="ml-3" href="https://www.instagram.com/gdsc.deu/">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link className="ml-3" href="https://github.com/GDSC-DEU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 text-gray-800 fill-current dark:text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
