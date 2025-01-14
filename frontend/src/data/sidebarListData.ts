import sitemap from 'routes/sitemap';



export const bottomListData = sitemap.filter((item) => {
  const id = item.id;
  if (id === 'network'||id==="income" || id==="Financial" || id==="Reward" || id==="dashboard" || id==="Profile") {
    return item;
  }
  return null;
});

export const profileListData = sitemap.find((item) => item.id === 'account-settings');
