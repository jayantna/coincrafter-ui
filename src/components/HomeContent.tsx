import Link from "next/link";

const HomeContent = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center font-extrabold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
        Welcome to Coincrafter
      </h1>
      <p className="text-gray-800 font-medium mt-2">Create ERC20 Token on the go!</p>
      <Link href="/app" className="mt-8">
        <button className="px-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 hover:opacity-90 transition-opacity">
          Launch App
        </button>
      </Link>
    </main>
  );
};

export default HomeContent;
