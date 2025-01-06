export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
  network: 'network',
  income: 'income'
};

export default {
  dashboard: `/dashboard`,
  network: `/network`,
  profile: `/profile`,
  about: `/about`,
  contact: `/contact`,
  directTeam: `/${rootPaths.network}/directTeams`,
  allTeams: `/${rootPaths.network}/allTeams`,

  levelIncome: `/${rootPaths.income}/levelIncome`,
  IBincome: `/${rootPaths.income}/IBincome`,
  RewardIncome: `/${rootPaths.income}/RewardIncome`,
  TPR: `/${rootPaths.income}/TPR`,
  TLI: `/${rootPaths.income}/TLI`,

  financial: `/financial`,
  reward: `/reward`,
  integrations: `/integrations`,
  settings: `/settings`,
  templatePages: `/template-pages`,
  accountSettings: `/account-settings`,

  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  comingSoon: `/coming-soon`,
  404: `/${rootPaths.errorRoot}/404`,
};
