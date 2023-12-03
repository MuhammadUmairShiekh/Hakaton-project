"use client"
// import Facebook from "../config/firebase"
import "remixicon/fonts/remixicon.css";
import { authentication } from "../config/firebase"
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";


const Login = () => {
    

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
          .then((re) => {
            router.push("/", { scroll: false });
            console.log(re);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

    return (
        <div className="loginFrom">

            <form class="max-w-sm mx-auto dark:bottom-2 bg-gray-900 p-5 rounded-lg mt-10">
                <h1 className=" text-white font-black border-b-2 text-2xl mb-7 uppercase">Welcome To Login</h1>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 borde text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 borde text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white" placeholder="PassWord @%$" required />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-white">Remember me</label>

                </div>
                <i onClick={signInWithFacebook} class="ri-facebook-fill bg-white p-1 rounded-lg cursor-pointer"></i>
                <button for="remember" class="ms-2 mb-3 text-sm font-medium text-white">FaceBook</button>

                <div className=" flex justify-around flex-wrap gap-2">
                    <button type="submit" class="text-white  bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button>
                    <button type="submit" class="text-white  bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN-UP</button>
                </div>

            </form>


        </div>
    )
}

export default Login