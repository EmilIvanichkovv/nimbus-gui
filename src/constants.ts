// App
export const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
const INFURA_KEY = 'f25e905e25a545dcaad2c939530b91db'
const rpcUrl = `https://mainnet.infura.io/v3/${INFURA_KEY}`
export const wcV2InitOptions = {
  projectId: '4f6c353926c22973029147b9d85c4485',
  requiredChains: [1, 56],
  dappUrl: 'http://localhost:5173/',
}
export const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl,
}

// Device Health Check
export const GOOD_STORAGE_TEXT =
  'You have plenty of storage available for additional node services.'
export const GOOD_CPU_CLOCK_RATE_TEXT = '2.4GHz is recommended for CPU.'
export const GOOD_RAM_MEMORY_TEXT =
  'There is sufficient RAM required for selected services.'
export const GOOD_NETWORK_TEXT = 'Network Latency is low.'
export const BAD_STORAGE_TEXT =
  'Your storage is running low as required for additional node services.'
export const BAD_CPU_CLOCK_RATE_TEXT =
  'Your CPU clock rate is below the recommended 2.4GHz.'
export const BAD_RAM_MEMORY_TEXT =
  'There is insufficient RAM required for selected services.'
export const BAD_NETWORK_TEXT = 'Network Latency is high.'

// Validator Onboarding
export const KEYSTORE_FILES = 'KeystoreFiles'
export const RECOVERY_PHRASE = 'Recovery Phrase'
export const BOTH_KEY_AND_RECOVERY = 'Both KeystoreFiles & Recovery Phrase'
export const ETH_PER_VALIDATOR = 32

export const FORM_STEPS = [
  { label: 'Overview', subtitle: 'Get Started', paths: [''] },
  {
    label: 'Advisories',
    subtitle: 'Understand your Duties',
    paths: ['advisories'],
  },
  {
    label: 'Client Setup',
    subtitle: 'Execution & Consensus',
    paths: [
      'validator-setup',
      'validator-setup-install',
      'client-setup',
      'activation-validator-setup',
    ],
  },
  {
    label: 'Validator Setup',
    subtitle: 'Validators & Withdrawal',
    paths: [
      'validator-setup',
      'validator-setup-install',
      'consensus-selection',
      'activation-validator-setup',
    ],
  },
  {
    label: 'Key Generation',
    subtitle: 'Secure your Keypairs',
    paths: ['key-generation'],
  },
  { label: 'Deposit', subtitle: 'Stake your ETH', paths: ['deposit'] },
  { label: 'Activation', subtitle: 'Complete Setup', paths: ['activation'] },
]
export const DepositStatusSteps = [
  { label: 'Deposit' },
  { label: 'Pending' },
  { label: 'Active' },
  { label: 'Exit' },
]
export const STEPPER_PATHS = [
  '/validator-onboarding/',
  '/validator-onboarding/advisories',
  '/validator-onboarding/validator-setup',
  '/validator-onboarding/validator-setup-install',
  '/validator-onboarding/consensus-selection',
  '/validator-onboarding/activation-validator-setup',
  '/validator-onboarding/client-setup',
  '/validator-onboarding/key-generation',
  '/validator-onboarding/recovery-phrase',
  '/validator-onboarding/',
  '/validator-onboarding/activation',
  '/dashboard',
]
export const ADVISORY_TOPICS: {
  [key: string]: string[]
} = {
  'Proof of Stake': [
    'Proof of Stake systems require validators to hold and lock up a certain amount of cryptocurrency to participate.',
    'In Proof of Stake, the chances of creating a block is proportional to the amount of cryptocurrency held.',
    'Unlike Proof of Work, Proof of Stake aims to achieve consensus without intensive computational work.',
  ],
  Deposit: [
    'Deposits are often irreversible, so ensure to double-check transaction details before confirming.',
    'Delay in deposit acknowledgment might be due to network congestion or node synchronization.',
    'Always keep transaction IDs or hashes for records and future references in case of disputes.',
  ],
  'Key Management': [
    'Storing your private keys on a device connected to the internet is susceptible to hacks and malware.',
    'Hardware wallets provide an added layer of security by keeping private keys isolated from online systems.',
    'Regularly back up and encrypt your key management solutions to prevent potential losses.',
  ],
  'Bad Behaviour': [
    'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing.',
    'Running your validator keys simultaneously on two or more machines will result in slashing.*',
    'Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.',
  ],
  Requirements: [
    'Ensure your system meets the minimum software and hardware requirements before initiating any operations.',
    'Staying updated with the latest versions is vital to maintain system integrity and performance.',
    'Failure to meet requirements might result in operational inefficiencies or security vulnerabilities.',
  ],
  Risks: [
    'Cryptocurrency investments are subject to high volatility and can result in both significant gains and losses.',
    'Always do thorough research before making investment decisions or engaging in transactions.',
    'Be wary of phishing scams, malicious software, and too-good-to-be-true offers.',
  ],
}

export const MAC = 'MacOS'
export const WINDOWS = 'Windows'
export const LINUX = 'Linux'

// for now, this will be constant values
export const CURRENCIES = {
  USD: 1583.42,
  EUR: 1323.61,
}
export const DEPOSIT_SUBTITLE =
  'Connect you Wallet to stake required ETH for new validators'
export const CLIENT_SETUP_SUBTITLE =
  'How many Validators would you like to run?'

// Dashboard
export const years = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEPT',
  'OCT',
  'NOV',
  'DEC',
]
export const VALIDATOR_TABS_RIGHT_SIDEBAR = ['Active', 'Pending', 'Inactive']

// Validator Management
export const VALIDATOR_TABS_MANAGEMENT = [
  'Active',
  'Pending',
  'Inactive',
  'Exited',
  'Withdraw',
  'All',
]
export const VALIDATORS_DATA = [
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
]
//Manage Validator
export const MANAGE_VALIDATOR_TABS = [
  'Overview',
  'Charts',
  'Blocks',
  'Attestations',
  'Sync',
  'Slashings',
  'Deposits',
  'Withdrawals',
]
export const MANAGE_VALIDATOR_TABS_TABLE_DATA = [
  {
    headers: [
      'Balance',
      'Income',
      'Proposals',
      'Attestations',
      'Effectiveness',
      'Rank',
    ],
    rows: [
      ['32.0786', null],
      ['0.0786', '#00D957'],
      ['1/102', null],
      ['98%', null],
      ['1', '#2F80ED'],
      ['585910', '#2F80ED'],
    ],
  },
  {
    headers: [
      'Total Rewards',
      '1D',
      '7D',
      '31D',
      'APR',
      '7D',
      '31D',
      '365D',
      'Luck',
    ],
    rows: [
      ['+1.31402 ETH', null],
      ['+1.31402 ETH', '#00D957'],
      ['+0.01579', '#00D957'],
      ['+0.06969', '#00D957'],
      ['%', null],
      ['2.57%', null],
      ['2.56%', null],
      ['4.10%', null],
      ['69.2% B / 592.1% S', null],
    ],
  },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
]

// Pair Device
export const VC = 'VC'
export const VALIDATOR_CLIENT = 'Validator Client'
export const BEACON = 'Beacon'
export const NODE = 'Node'
export const VC_PORT = '9000'
export const BEACON_PORT = '5052'
export const DEFAULT_ADDRESS = 'http://124.0.0.1'
