import { useState, ChangeEvent, FormEvent } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconifyIcon from 'components/base/IconifyIcon';
import { loginFunction } from '../../services/authService.js'
import paths from 'routes/paths';
import { useNavigate } from 'react-router-dom';

interface User {
  [key: string]: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    const response = await loginFunction(user)
    console.log(response)

    if (response.authToken) {
      localStorage.setItem("authToken", response?.authToken)
      navigate("/dashboard")

    }


    if (response.message || response.message) {
      if (response.message) {
        alert(response.message)
      }
      else {
        // alert(response.errors.errors)
        console.log(response.errors)
      }
    }

  };

  return (
    <>
      <Typography align="center" variant="h3" my={2} fontWeight={600}>
        LogIn
      </Typography>

      <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>
    
        {/* <TextField
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          autoFocus
          required
        /> */}
        <input type="text" name="username" value={user.username} required onChange={handleInputChange} placeholder='UserName' className='rounded-sm outline-none px-2 my-auto py-2 border border-1 border-none border-gray-600 text-slate-300 bg-transparent'/>
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          autoFocus
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ opacity: user.password ? 1 : 0 }}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <IconifyIcon icon={showPassword ? 'ion:eye' : 'ion:eye-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack mt={-1.5} alignItems="center" justifyContent="space-between">
          <FormControlLabel
            control={<Checkbox id="checkbox" name="checkbox" color="primary" />}
            label="Remember me"
          />
          <Link href="#!" fontSize="body2.fontSize" letterSpacing={0.5}>
            Forgot password?
          </Link>
        </Stack>
        <Button type="submit" variant="contained" size="medium" fullWidth>
          Submit
        </Button>
        {/* 
        <Divider sx={{ my: 1 }} >or Login with</Divider>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<IconifyIcon icon="uim:google" />}
        >
          Login with Google
        </Button>
       
      </Stack> */}

        <Typography
          my={3}
          color="text.secondary"
          variant="body2"
          align="center"
          letterSpacing={0.5}
        >
          Don't have an account? <Link href={paths.signup}>{'Signup'}</Link>
        </Typography>
      </Stack>
    </>
  );
};

export default Login;
