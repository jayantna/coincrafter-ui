import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../app/Home.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full p-4">
        <div className="flex justify-between items-center">
          {!isHomePage && (
            <Link href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
                Coincrafter
              </div>
            </Link>
          )}
          {!isHomePage && (
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/jayantna/Foundry-FundMe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                  className="fill-transparent"
                  style={{
                    filter: "drop-shadow(0px 0px 0.5px #4C1D95)"
                  }}
                >
                  <path className="fill-current bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <ConnectButton />
            </div>
          )}
        </div>
      </div>

      {children}

      <footer className={styles.footer + " mt-auto py-2 text-sm text-gray-500"}>
        <span>
          Made by Jayant Nagle |{" "}
          <a 
            href="http://www.jayantdevhub.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-purple-600"
          >
            Portfolio
          </a>{" "}
          |{" "}
          <a 
            href="https://github.com/jayantna"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-600"
          >
            Github
          </a>{" "}
          |{" "}
          <a 
            href="https://www.linkedin.com/in/jayantn/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-600"
          >
            LinkedIn
          </a>
          {" "}
          |{" "}
          <a 
            href="https://x.com/thejnbtc"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-600"
          >
            X
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
