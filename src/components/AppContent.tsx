import { useState } from "react";
import Input from "./Input";

const AppContent = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ tokenName, tokenSymbol, tokenSupply });
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
        Create Your Token
      </h1>
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-2xl space-y-6 p-10 rounded-3xl 
          bg-gradient-to-br from-white/20 to-white/5 
          backdrop-blur-xl border border-white/30 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
          hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] 
          transition-all duration-300"
      >
        <Input
          label="Token Name"
          id="tokenName"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          placeholder="Enter token name"
          required
        />
        <Input
          label="Token Symbol"
          id="tokenSymbol"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          placeholder="Enter token symbol"
          required
        />
        <Input
          label="Token Supply"
          id="tokenSupply"
          type="number"
          value={tokenSupply}
          onChange={(e) => setTokenSupply(e.target.value)}
          placeholder="Enter token supply"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-900 to-pink-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Mint
        </button>
      </form>
    </main>
  );
};

export default AppContent;
