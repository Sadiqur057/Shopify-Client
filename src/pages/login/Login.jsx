import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const {
    register,
    handleSubmit
  } = useForm()
  const { signInUser, googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    signInUser(data?.email, data?.password)
      .then(() => {
        navigate('/shop')
      })
  }

  const handleGoogleLogin = ()=>{
    googleSignIn()
    .then(result=>{
      console.log(result)
      navigate('/shop')
    })
  }

  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-3 bg-darker">
      <div className="w-full max-w-sm p-6 m-auto mx-auto  rounded-lg shadow-md ">

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200">Email</label>
            <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-400 border border-gray-700 rounded-lg bg-dark focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("email", { required: true })} />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-200">Password</label>
              <a href="#" className="text-xs text-gray-400 hover:underline">Forget Password?</a>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-400 border border-gray-700 rounded-lg bg-dark focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register('password', { required: true })} />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize bg-primary hover:bg-secondary rounded-lg">
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full px-6 py-2.5 mx-2 text-sm font-medium text-white bg-[#0d9754] hover:bg-[#10a75e] rounded-lg ">
            Sign in with Google
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400"> Don&apos;t have an account? <Link to="/register" className="font-medium text-gray-200 hover:underline">Create One</Link></p>
      </div>
    </div>
  );
};

export default Login;