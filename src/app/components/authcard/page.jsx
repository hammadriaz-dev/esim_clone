import { useState } from 'react';

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
    const isLogin = currentPage === 'login';

    // State for the multi-step signup process
    const [signupStep, setSignupStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle moving to the next step
    const handleNextStep = (e) => {
        e.preventDefault();
        setSignupStep(prevStep => prevStep + 1);
    };

    // Function to handle moving to the previous step
    const handlePrevStep = () => {
        setSignupStep(prevStep => prevStep - 1);
    };

    // Function to handle the final signup submission
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords do not match!");
            return;
        }
        console.log("Signup complete:", { email, password });
        setCurrentPage('login');
        setSignupStep(1);
    };

    return (
        <div className="bg-white overflow-hidden flex flex-col md:flex-row w-full max-w-6xl mt-12">
            {/* Left side with marketing image and text */}
            <div className="relative w-full md:w-2/5 bg-cover bg-center rounded-3xl p-8 flex flex-col justify-end text-white" style={{
                backgroundImage: "url('assets/Images/loginPageImage.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* Trustpilot review section */}
                <div className="absolute top-8 left-8 flex items-center bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <div className="text-sm font-semibold mr-2">Excellent</div>
                    <img src="/assets/icons/5star.jpeg" alt="" />
                    <span className="text-sm font-light ml-2">436 reviews on</span>
                    <img src="/assets/icons/singleStar.jpeg" alt="Trustpilot logo" className="h-4 ml-2" />
                    <span className="text-sm font-light ml-2">Trustpilot</span>
                </div>
                <div>
                    <h2 className="text-5xl font-bold mb-4">Your only eSIM Solution</h2>
                    <p className="text-lg font-light">Instant. Secure. Global.</p>
                </div>
            </div>

            {/* Right side with the form */}
            <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">{isLogin ? 'Login' : `Signup Step ${signupStep}`}</h2>

                <form onSubmit={e => isLogin ? e.preventDefault() : (signupStep === 3 ? handleSignupSubmit(e) : handleNextStep(e))}>
                    {/* Conditional rendering for Login or Signup steps */}
                    {isLogin ? (
                        <>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
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
                        // Signup Steps
                        <div className="space-y-4">
                            {signupStep === 1 && (
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
                            )}
                            {signupStep === 2 && (
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
                                    />
                                </div>
                            )}
                            {signupStep === 3 && (
                                <>
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
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                                </>
                            )}
                        </div>
                    )}
                    
                    {/* Action button */}
                    <div className="flex items-center space-x-4 mt-6">
                        {!isLogin && signupStep > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevStep}
                                className="w-1/2 bg-gray-200 text-gray-700 rounded-xl py-3 font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
                            >
                                Back
                            </button>
                        )}
                        <button type="submit" className={`w-full bg-orange-500 text-white rounded-xl py-3 font-semibold hover:bg-orange-600 transition duration-300 ease-in-out ${!isLogin && signupStep > 1 ? 'w-1/2' : 'w-full'}`}>
                            {isLogin ? 'Sign In' : (signupStep === 3 ? 'Signup' : 'Next')}
                        </button>
                    </div>
                </form>

                {/* Switch between login and signup */}
                <div className="text-center text-sm text-gray-500 my-6">
                    {isLogin ? (
                        <span>Don't have an account? <button onClick={() => setCurrentPage('signup')} className="text-blue-500 hover:underline font-medium">Signup</button></span>
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
