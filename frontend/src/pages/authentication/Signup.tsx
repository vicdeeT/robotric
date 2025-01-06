import { useState, FormEvent } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import paths from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import { signUpFunction } from 'services/authService';
import { validReferall } from 'services/TeamApis';

interface User {
  [key: string]: string;
}

const Signup = () => {
  const [user, setUser] = useState<User>({ referrerId: '', name: '', email: '', password: '', mobile: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [SignUpSuccess, setSignUpSuccess] = useState(false)
  const [showMessageBox, setshowMessageBox] = useState(false)
  const [SponsorName, setSponsorName] = useState("")
  const [isValidReferrer, setIsValidReferrer] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const [ExistUser, setExistUser] = useState({ username: "", email: "" })
  const [message, setmessage] = useState("")

  const navigate = useNavigate()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "referrerId") {
      debounceValidateReferral(value); // Trigger validation dynamically
    }
  };

  // Debounce function
  let debounceTimer: ReturnType<typeof setTimeout>;
  const debounceValidateReferral = (referrerId: string) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => validateReferrer(referrerId), 300); // 300ms delay
  };

  const validateReferrer = async (referrerId: string) => {
    if (referrerId.trim() === "") {
      setValidationMessage("");
      setIsValidReferrer(false);
      return;
    }

    try {
      // const token = localStorage.getItem("authToken");
      const response = await validReferall(referrerId);
      console.log(response, "re", response?.user)
      if (response?.valid) {
        setIsValidReferrer(true);
        setSponsorName(response.user?.name); // Assuming API returns sponsor name
        setValidationMessage("Referrer ID is valid!");
      } else {
        setIsValidReferrer(false);
        setValidationMessage("Invalid Referrer ID.");
      }
    } catch (error) {
      console.error("Error validating referrer ID:", error);
      setIsValidReferrer(false);
      setValidationMessage("Error validating referrer ID.");
    }
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setshowMessageBox(false)

    const response = await signUpFunction(user)
    console.log("response", response)
    if (response.authToken) {
      localStorage.setItem("authToken", response?.authToken)
      navigate("/")

    }
    if (response.message || response.error) {
      if (response.message) {
        setSignUpSuccess(false)
        setmessage(response.message)
      }
      else {
        setSignUpSuccess(false)

      }
    }

    if (response.user) {
      setshowMessageBox(true)
      setExistUser(response.user)
      setmessage(response.message)
    }
  };

  return (
    <>
      <Typography align="center" variant="h3" my={2} fontWeight={600}>
        SignUp
      </Typography>
      {SignUpSuccess && <div className='text-blue-400 text-center my-2'><span className='text-green-600 font-semibold my-1'>SignUp Success</span> <br /> Now you can <button className='underline text-red-500 underline' onClick={() =>
        navigate("/authentication/login")}>Login &rarr;</button></div>}
      <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>

        <div className='flex space-x-4'>
          <TextField
            id="referrerId"
            name="referrerId"
            className='w-1/2'
            type="text"
            value={user.referrerId}
            onChange={handleInputChange}
            variant="filled"
            placeholder=" Referrer Id"
            autoComplete="name"
            autoFocus
            required
          />

          <span className='w-1/2 text-center my-auto py-2 border border-gray-600 text-slate-300'>{isValidReferrer == true ? SponsorName : "Sponsor Name"}</span>

        </div>

        {validationMessage && (<div className="px-6 flex flex-row items-center justify-between">
          <span className="text-xs font-regular text-gray-900 mr-1 flex flex-row items-center text-blue-300">
          </span>

          <span className=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

            <span className={isValidReferrer ? "text-green-500" : "text-red-500"}>
              {validationMessage}
            </span>          </span>
        </div>)}

        <div className='flex space-x-4'>
          <TextField
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            variant="filled"
            placeholder="Your Name"
            autoComplete="name"
            fullWidth
            autoFocus
            required
          />
          <TextField
            id="mobile"
            name="mobile"
            type="tel"
            value={user.mobile}
            onChange={handleInputChange}
            variant="filled"
            placeholder="Mobile No."
            autoComplete="mobile"
            fullWidth
            autoFocus
            required
          />
        </div>

        <TextField
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
        />
        {showMessageBox && (<div className="px-6 flex flex-row items-center justify-between">
          <span className="text-xs font-regular text-gray-900 mr-1 flex flex-row items-center text-blue-300">
            {message}
          </span>

          <span className=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

            <span className="ml-1 text-blue-300 font-semibold text-md">User Name : {ExistUser?.username}</span>
          </span>
        </div>)}
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
        <Button type="submit" variant="contained" size="medium" fullWidth sx={{ mt: 1.5 }}>
          Submit
        </Button>

        {/* <Divider sx={{ my: 1 }}>or Signup with</Divider>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<IconifyIcon icon="uim:google" />}
          >
            Signup with Google
          </Button>
        </Stack> */}
        <Typography
          my={3}
          color="text.secondary"
          variant="body2"
          align="center"
          letterSpacing={0.5}
        >
          Already have an account? <Link href={paths.login}>{'Login'}</Link>
        </Typography>
      </Stack>
    </>
  );
};

export default Signup;
