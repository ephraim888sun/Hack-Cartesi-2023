export const dapp_address = '0xF8C694fd58360De278d5fF2276B7130Bfdc0192A'

export const ethereum_rpc_address =
  'https://nextel-peer-proper-addition.trycloudflare.com'

export const private_address =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

export const graphql_url =
  'https://mtv-judgment-pmid-mile.trycloudflare.com/graphql'

export const input_facet_abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochNumber',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'inputIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'input',
        type: 'bytes',
      },
    ],
    name: 'InputAdded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_input',
        type: 'bytes',
      },
    ],
    name: 'addInput',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentInbox',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getInput',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNumberOfInputs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
