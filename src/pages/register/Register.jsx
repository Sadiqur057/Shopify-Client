import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit
  } = useForm()
  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    createUser(data?.email, data?.password)
    .then(result=>{
      console.log(result?.user)
      navigate('/products')
    })
    
  }

  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-3 bg-primary">
      <div className="w-full max-w-sm p-6 m-auto mx-auto  rounded-lg shadow-md ">

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-200">Name</label>
            <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-400 border border-gray-700 rounded-lg bg-secondary focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-3" {...register("name", { required: true })} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200">Email</label>
            <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-400 border border-gray-700 rounded-lg bg-secondary focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("email", { required: true })} />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-200">Password</label>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-400 border border-gray-700 rounded-lg bg-secondary focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register('password', {required:true})}/>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-lg hover:bg-indigo-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/login' className="font-medium text-gray-200 hover:underline">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;