import { useState } from "react";
import log_img from "../assets/login-animate.svg";





export default function Login(): JSX.Element {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <main className="w-full h-screen flex ">
      <div className="grid grid-cols-1  md:grid-cols-2 m-auto h-[450px] sm:max-w-[850px] rounded-2xl">
        <div className="w-full h-[300px] hidden md:block">
          <img className="mt-14" src={log_img} alt="" />
        </div>
        <div className="p-5 flex flex-col justify-around">
        <form onSubmit={handleClick}>
        <h1 className="text-5xl ml-[110px] poppins-semibold text-slate-900 mb-3 ">Login</h1>
            <div>
              <label className="poppins-medium ml-1 text-slate-600">Email Address</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2"
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
             </div>
            <div>
              <label className="poppins-medium ml-1 text-slate-600">Password</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className=" ml-44">
                       <button className='ml-10 font-medium text-base text-blue-500'>Forgot Password?</button>
                   </div>
            <button
              className=" ml-14 w-[230px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-violet-700 to-blue-500  text-white text-lg font-semibold poppins-extrabold"
              key="1"
            ><p>Log in</p>
            </button>
                <div className='mt-2 flex ml-[50px]'>
                    <p className="font-medium text-base"> Did not have an Account ?</p>
                    <button className="text-blue-500 text-base font-medium ml-2 ">Register</button>
               </div>
        </form>
   </div>

      </div>
    </main>
  );
}

