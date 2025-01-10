import { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';
import { fetchUser } from 'services/authService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
  redirects:string
}

const menuItems: MenuItems[] = [
  {
    id: 1,
    title: 'View Profile',
    icon: 'mingcute:user-2-fill',
    redirects:'profile'
  },
  {
    id: 2,
    title: 'Account Settings',
    icon: 'material-symbols:settings-account-box-rounded',
    redirects:'/'

  },
  
 
  {
    id: 3,
    title: 'Help Center',
    icon: 'material-symbols:live-help',
    redirects:'/'

  },
  {
    id: 4,
    title: 'Logout',
    icon: 'material-symbols:logout',
    redirects:"/"
  },
];

const ProfileMenu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [user, setuser] = useState({ username: "", userId: "", email: "", image: "" })

  useEffect(() => {
    fetchUserDetails()
  })

  const fetchUserDetails = async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetchUser(token)
    setuser(response)

  }

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("authToken")
    navigate("/")
  }

  return (
    <>
      <Tooltip title="Profile">
        <ButtonBase onClick={handleProfileClick} disableRipple>
          <Stack
            spacing={1}
            alignItems="center"
            aria-controls={open ? 'account-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
          >
            <Avatar
              src={!user?.image ? `https://avatar.iran.liara.run/username?username=${encodeURIComponent(user?.email)}` :  import.meta.env.VITE__API_Backend+user?.image}
              sx={(theme) => ({
                ml: 0.8,
                height: 32,
                width: 32,
                bgcolor: theme.palette.primary.main,
              })}
            />
            <Typography variant="subtitle2">{user?.username}</Typography>
          </Stack>
        </ButtonBase>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            p: '0 !important',
            width: 240,
            overflow: 'hidden',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfileMenuClose} sx={{ '&:hover': { bgcolor: 'info.main' } }}>
          <Avatar
            src={!user?.image ? `https://avatar.iran.liara.run/username?username=${encodeURIComponent(user?.email)}` : import.meta.env.VITE__API_Backend+user?.image}
            sx={{
              bgcolor: 'primary.main',
            }}
          />
          <Stack direction="column">
            <Typography variant="body2" fontWeight={500}>
              {user?.username}
            </Typography>
            <Typography variant="caption" fontWeight={400} color="text.secondary">
              {"RT"+user?.userId}
            </Typography>
          </Stack>
        </MenuItem>

        <Divider />

        {menuItems.map((item) => {
          return (
            <MenuItem key={item.id} onClick={handleProfileMenuClose} sx={{ py: 1 }}>
              {item.title === "Logout" ? <ButtonBase onClick={handleLogOut}>  <ListItemIcon sx={{ mr: 2, fontSize: 'button.fontSize' }}>
                <IconifyIcon icon={item.icon} />
              </ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography></ButtonBase> : (<ButtonBase>
                  <ListItemIcon sx={{ mr: 2, fontSize: 'button.fontSize' }}>
                    <IconifyIcon icon={item.icon} />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    <Link to={item.redirects}>{item.title}</Link>
                  </Typography>
                </ButtonBase>)}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ProfileMenu;
