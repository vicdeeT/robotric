import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';
import CollapseListItem from './list-items/CollapseListItem';
import ListItem from './list-items/ListItem';
import LogoImg from 'assets/images/Logo.png';
// import avater from 'assets/images/avater.png';
import { bottomListData } from 'data/sidebarListData';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from 'services/authService';
import { useEffect, useState } from 'react';


const DrawerItems = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState({ username: "", userId: "", email: "", image: "" })

  useEffect(() => {
    fetchUserDetails()
  })

  const fetchUserDetails = async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetchUser(token)
    setuser(response)

  }
  const handleLogOut = () => {
    localStorage.removeItem("authToken")
    navigate("/authentication/login")
  }

  return (
    <>
      <Stack
        pt={5}
        pb={4}
        px={3.5}
        position={'sticky'}
        top={0}
        bgcolor="info.darker"
        alignItems="center"
        justifyContent="flex-start"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={LogoImg} alt="logo" height={24} width={24} sx={{ mr: 1 }} />
          <Typography variant="h5" color="text.primary" fontWeight={600} letterSpacing={1}>
            Robotrik
          </Typography>
        </ButtonBase>
      </Stack>


      <div className="flex flex-col items-center px-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={!user?.image ? `https://avatar.iran.liara.run/username?username=${encodeURIComponent(user?.email)}` : user?.image} alt="profile image" />
        <h5 className="mb-1 text-lg font-medium text-gray-900 text-white">{user?.username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">UserId: {"RT"+user?.userId}</span>

      </div>



      <Divider />

      <List component="nav" sx={{ px: 2.5 }}>
        {bottomListData.map((route) => {
          if (route.items) {
            return <CollapseListItem key={route.id} {...route} />;
          }
          return <ListItem key={route.id} {...route} />;
        })}
      </List>
      <button className='bg-blue-950 hover:bg-blue-900 text-slate-300 w-fit mx-7 my-2 px-6 py-2 rounded-md' onClick={handleLogOut}>Logout</button>


    </>
  );
};

export default DrawerItems;
