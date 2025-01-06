import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: paths.dashboard,
    icon: 'mingcute:home-1-fill',
    active: true,
  },

  {
    id: 'network',
    subheader: 'Network',
    icon: 'mingcute:safe-lock-fill',
    items: [
      {
        name: 'Direct Team',
        pathName: 'direcTeam',
        path: paths.directTeam,
      },
      {
        name: 'All Team',
        pathName: 'allTeam',
        path: paths.allTeams,
      },
    ],
  }
  ,

  {
    id: 'income',
    subheader: 'Income',
    icon: 'mingcute:safe-lock-fill',
    items: [
      {
        name: 'Level Income',
        pathName: 'levelIncome',
        path: paths.levelIncome,
      },
      {
        name: 'IB Income',
        pathName: 'IBIncome',
        path: paths.IBincome,
      },
      {
        name: 'Reward Income',
        pathName: 'rewardIncome',
        path: paths.RewardIncome,
      },
      {
        name: 'Trading Profit Income',
        pathName: 'tradingProfitIncome',
        path: "/",
      },
      {
        name: 'Trading Level Income',
        pathName: 'TradingLevelIncome',
        path: '/',
      },
    ],
  },

  {
    id: 'Financial',
    subheader: 'Financial',
    icon: 'mingcute:safe-lock-fill',
    items: [
      {
        name: 'Withdrawal Amount (USDT)',
        pathName: 'withdrawlAmount',
        path: '/',
      },
      {
        name: 'Withdrawl Report',
        pathName: 'withdrawlReport',
        path: '/',
      },
      {
        name: 'Account Statement',
        pathName: 'accountStatement',
        path: '/',
      },
      {
        name: 'Income Summary',
        pathName: 'IncomeSummary',
        path: '/',
      },
      {
        name: 'Wallet History',
        pathName: 'WalletHistory',
        path: '/',
      },
    ],
  }, {
    id: 'Reward',
    subheader: 'Reward',
    path: paths.reward,
    icon: 'material-symbols:settings-rounded',
    active: true,

  },

  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'mingcute:safe-lock-fill',
    items: [
      {
        name: 'Login',
        pathName: 'login',
        path: paths.login,
      },
      {
        name: 'Signup',
        pathName: 'signup',
        path: paths.signup,
      },
    ],
  },

  {
    id: 'settings',
    subheader: 'Settings',
    icon: 'material-symbols:settings-rounded',
    items: [
      {
        name: 'Profile',
        pathName: 'profile',
        path: "#",
      },
      {
        name: 'Wallet Address',
        pathName: 'walletAddress',
        path: "#",
      },
    ],
  },




];

export default sitemap;
