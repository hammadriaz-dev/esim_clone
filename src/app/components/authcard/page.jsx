import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSendOtpMutation, useRegistration, useLogin } from '../../hooks/useAuthMutation';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/navigation';
// The main component that renders either the Login or Signup form
const App = () => {

    const [currentPage, setCurrentPage] = useState('login');
    
    return (
        <div className="min-h-screen bg-white flex items-center justify-center font-sans p-4">
            <AuthCard currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

// Reusable component for both Login and Signup forms
const AuthCard = ({ currentPage, setCurrentPage }) => {
    const router = useRouter()
    const isLogin = currentPage === 'login';
    const { login } = useAuth();
    
    // State for the form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [otp, setOtp] = useState('');
    const [signupStep, setSignupStep] = useState(1);
    const [message, setMessage] = useState('');
    
    // React Query hooks for API mutations
    const { mutate: sendOtp, isPending: isOtpLoading, error: otpError } = useSendOtpMutation();
    const { mutate: registerUser, isPending: isRegistering, error: registrationError } = useRegistration();
    const { mutate: loginUser, isPending: isLoggingIn, error: loginError } = useLogin();
    
    // Handler for the first form submission (sending OTP)
    const handleSendOtp = (e) => {
        e.preventDefault();
        setMessage('');
        
        if (!email || !password) {
            setMessage('Email and password are required.');
            return;
        }
        
        sendOtp({ email, password }, {
            onSuccess: () => {
                setMessage('OTP sent successfully! Please check your email and fill out the remaining fields.');
                setSignupStep(2); 
            },
            onError: (error) => {
                setMessage(error.response?.data?.message || 'Error sending OTP. Please try again.');
            }
        });
    };
    
    // Handler for the second form submission (final registration)
    const handleRegistration = (e) => {
        e.preventDefault();
        setMessage('');
        
        if (!email || !password || !name || !otp) {
            setMessage('All fields are required.');
            return;
        }
        
        registerUser({ email, password, name, otp }, {
            onSuccess: (data) => {
                Cookies.set('userToken', data.token, { expires: 7 });
                login();
                setCurrentPage('login');
                setMessage('Registration successful!');
            },
            onError: (error) => {
                setMessage(error.response?.data?.message || 'Registration failed. Please check your OTP.');
            }
        });
    };
    
    // Handler for the login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage('');
    
        if (!email || !password) {
            setMessage('Email and password are required.');
            return;
        }
    
        loginUser({ email, password }, {
            onSuccess: (data) => {
                login(data.token);
                setMessage('Logged in successfully!');
                router.push('/manage-your-sim'); 
            },
            onError: (error) => {
                setMessage(error.response?.data?.message || 'Login failed. Please check your credentials.');
            }
        });
    };
    
    return (
        <div className="bg-white overflow-hidden flex flex-col md:flex-row w-full max-w-6xl mt-12 rounded-3xl shadow-xl">
            {/* Left side with marketing image and text */}
            <div className="relative w-full md:w-2/5 bg-cover bg-center rounded-3xl p-8 flex flex-col justify-end text-white" style={{
                backgroundImage: "url('https://placehold.co/600x800/226d97/FFFFFF?text=eSIM+Solution')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="absolute top-8 left-8 flex items-center bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <div className="text-sm font-semibold mr-2">Excellent</div>
                    <svg className="w-20 h-4" viewBox="0 0 100 20" fill="currentColor">
                        <path d="M10,0L13,6L20,7L15,12L16,19L10,16L4,19L5,12L0,7L7,6Z" fill="#00B67A" />
                        <path d="M30,0L33,6L40,7L35,12L36,19L30,16L24,19L25,12L20,7L27,6Z" fill="#00B67A" />
                        <path d="M50,0L53,6L60,7L55,12L56,19L50,16L44,19L45,12L40,7L47,6Z" fill="#00B67A" />
                        <path d="M70,0L73,6L80,7L75,12L76,19L70,16L64,19L65,12L60,7L67,6Z" fill="#00B67A" />
                        <path d="M90,0L93,6L100,7L95,12L96,19L90,16L84,19L85,12L80,7L87,6Z" fill="#00B67A" />
                    </svg>
                    <span className="text-sm font-light ml-2">436 reviews on</span>
                    <span className="text-sm font-bold ml-2">Trustpilot</span>
                </div>
                <div>
                    <h2 className="text-5xl font-bold mb-4">Your only eSIM Solution</h2>
                    <p className="text-lg font-light">Instant. Secure. Global.</p>
                </div>
            </div>
            
            {/* Right side with the form */}
            <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">{isLogin ? 'Login' : 'Signup'}</h2>
                
                {message && <div className="text-center text-sm mb-4 text-green-600">{message}</div>}
                {otpError && <div className="text-center text-sm mb-4 text-red-600">{otpError.response?.data?.message || 'Error sending OTP.'}</div>}
                {registrationError && <div className="text-center text-sm mb-4 text-red-600">{registrationError.response?.data?.message || 'Error registering user.'}</div>}
                {loginError && <div className="text-center text-sm mb-4 text-red-600">{loginError.response?.data?.message || 'Error logging in.'}</div>}

                <form onSubmit={isLogin ? handleLogin : signupStep === 1 ? handleSendOtp : handleRegistration}>
                    {isLogin ? (
                        <>
                            {/* Login fields */}
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="example@123.com" 
                                        className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                                    <div className="relative">
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="************" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 pr-10"
                                        />
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                                <path fillRule="evenodd" d="M.661 10.372C3.12 4.144 6.848 2 10 2s6.88 2.144 9.339 8.372a1 1 0 010 1.256C16.88 17.856 13.152 20 10 20s-6.88-2.144-9.339-8.372a1 1 0 010-1.256zM10 18c2.977 0 5.76-1.54 8-4.148-2.24-2.607-5.023-4.148-8-4.148S4.24 11.245 2 13.852C4.24 16.46 7.023 18 10 18z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm my-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="rememberMe" className="rounded text-orange-500 focus:ring-orange-500" />
                                    <label htmlFor="rememberMe" className="ml-2 text-gray-600">Remember me</label>
                                </div>
                                <a href="#" className="text-gray-500 hover:underline">Forgot Password?</a>
                            </div>
                        </>
                    ) : (
                        // Signup Form - Two steps
                        <>
                            {signupStep === 1 && (
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="example@123.com" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="************" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                </div>
                            )}
                            {signupStep === 2 && (
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="example@123.com" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="************" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="otp" className="block text-gray-700 font-medium mb-1">Verify OTP</label>
                                        <input 
                                            type="text" 
                                            id="otp" 
                                            name="otp" 
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter the 6-digit code" 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                            required 
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    
                    {/* Action button */}
                    <div className="flex items-center space-x-4 mt-6">
                        <button 
                            type="submit" 
                            className="w-full bg-orange-500 text-white rounded-xl py-3 font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                            disabled={isLogin ? isLoggingIn : (signupStep === 1 ? isOtpLoading : isRegistering)}
                        >
                            {isLogin ? (isLoggingIn ? 'Signing In...' : 'Sign In') : (signupStep === 1 ? (isOtpLoading ? 'Sending OTP...' : 'Send OTP') : (isRegistering ? 'Signing Up...' : 'Signup'))}
                        </button>
                    </div>
                </form>

                {/* Switch between login and signup */}
                <div className="text-center text-sm text-gray-500 my-6">
                    {isLogin ? (
                        <span>Don't have an account? <button onClick={() => { setCurrentPage('signup'); setSignupStep(1); }} className="text-blue-500 hover:underline font-medium">Signup</button></span>
                    ) : (
                        <span>Already have an account? <button onClick={() => { setCurrentPage('login'); setSignupStep(1); }} className="text-blue-500 hover:underline font-medium">Sign In</button></span>
                    )}
                </div>

                {/* Social login buttons */}
                <div className="flex justify-between space-x-2">
                    <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-xl py-3 text-gray-700 font-medium hover:bg-gray-50 transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M24 9.5c3.54 0 6.55 1.55 8.74 3.7l6.39-6.39C35.91 3.51 30.56 1 24 1 14.15 1 5.43 6.94 1 16.59l8.69 6.77c2.3-6.19 8.27-10.86 14.31-10.86z" /><path fill="#4CAF50" d="M47.5 24c0-1.57-.14-3.13-.4-4.66H24v9.64h13.7c-.52 2.92-2.1 5.38-4.52 7.06l8.09 6.27c4.78-4.44 7.51-11.08 7.51-18.31z" /><path fill="#4285F4" d="M24 47c6.56 0 12.24-2.16 16.27-5.87L32.18 34.86c-2.3 1.68-5.22 2.76-8.18 2.76-6.04 0-11.96-4.67-14.31-10.86L1 30.41C5.43 40.06 14.15 47 24 47z" /><path fill="#F44336" d="M9.69 23.32c-.37-1.1-1.39-2.31-2.92-3.23l-8.69-6.77c-.98 2.62-1.56 5.37-1.56 8.28 0 2.91.58 5.66 1.56 8.28l8.69-6.77c1.53-.92 2.55-2.13 2.92-3.23z" /></svg>
                        Continue with Google
                    </button>
                    <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-xl py-3 text-gray-700 font-medium hover:bg-gray-50 transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-5 w-5 mr-2" viewBox="0 0 50 50">
                            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                        </svg>
                        Continue with Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
