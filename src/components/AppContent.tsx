import { useState } from "react";
import Input from "./Input";
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useWriteContract } from "wagmi"
import { parseEther } from "viem";
import ErrorModal from './ErrorModal';
import {abi} from "../../abi/CraftERC20Token/abi"

const AppContent = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { openConnectModal } = useConnectModal();
  const { writeContract } = useWriteContract();
  const account = useAccount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(account.status === 'disconnected') {
      if (openConnectModal) {
        openConnectModal();
      }
      return;
    }
    if (!tokenName || !tokenSymbol || !tokenSupply) {
      setErrorMessage("All fields are required");
      setIsErrorModalOpen(true);
      return;
    }
    console.log({ tokenName, tokenSymbol, tokenSupply });
    writeContract({
      abi,
      address: "0xD6507E29fA1d984824157a1d8Ec018762e4EE31a",
      functionName: "mintERC20Token",
      args: [parseEther(tokenSupply), tokenName, tokenSymbol],
    })
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
        />
        <Input
          label="Token Symbol"
          id="tokenSymbol"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          placeholder="Enter token symbol"
        />
        <Input
          label="Token Supply"
          id="tokenSupply"
          type="number"
          value={tokenSupply}
          onChange={(e) => setTokenSupply(e.target.value)}
          placeholder="Enter token supply"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-900 to-pink-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
          // onClick={openConnectModal}
        >
          Mint
        </button>
      </form>
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        message={errorMessage}
      />
    </main>
  );
};

export default AppContent;
