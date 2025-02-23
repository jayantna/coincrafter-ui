export const abi = [
  {
    "type": "function",
    "name": "getTokenOwners",
    "inputs": [
      {
        "name": "index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTokenOwnersLength",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTokensMintedByAddress",
    "inputs": [
      {
        "name": "addr",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mintERC20Token",
    "inputs": [
      {
        "name": "initialSupply",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "tokenName",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "tokenSymbol",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract Token"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "TokenCrafted",
    "inputs": [
      {
        "name": "tokenDeployer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "tokenContract",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
] as const;
