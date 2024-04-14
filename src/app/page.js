import Image from "next/image";
import login from "../../public/login.png";
import Link from "next/link";
export default function Home() {
 
  return (
    <main className="flex h-screen max-h-screen flex-row items-center justify-between">
      <div
        className="h-screen w-1/2 flex flex-col items-center justify-center p-5"
        style={{ backgroundColor: "rgb(71, 112, 255)" }}
      >
        <div className="  max-h-screen">
          <Image width={500} height={300} src={login} />
        </div>
        <h1 className="text-white text-3xl">
          Plutus is Personal Finance Made Easy
        </h1>
        <p className="text-white text-md font-thin">
          All your accounts, cards, savings, and investments in one place.
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col gap-3">
        <h1 className=" text-3xl text-left font-semibold">Login</h1>
        <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="amount"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            /> 
            <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
          <Link href={"/dashboard"} className="w-full h-10">
          <button className="h-10 w-full bg-black text-white"> Login</button>
          </Link>
          <a style={{color:"#20b2aaff"}} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Forgot your Password?</a>

        </div>
        
      </div>
    </main>
  );
}
