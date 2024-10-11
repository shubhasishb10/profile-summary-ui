import PageButton from "./controls/PageButton";

//@ts-ignore
export default function Login({handleLoginClick}) {
  return (
    <div className="grid bg-cover h-screen place-items-center bg-sky-50 bg-[url('login-bg.jpg')] bg-no-repeat bg-opacity-20">
      <form className="text-2xl flex flex-col justify-evenly p-10 bg-[url('bg-login-window.png')] rounded-2xl shadow-xl border-b-8 border-t-8 border-sky-800">
        <h1 className="text-center m-20 text-6xl text-gray-200">Login</h1>
        <div className="p-8 flex">
          <label className="text-gray-200">Username</label>
          <input
            className="my-auto m-8 h-12 w-100 rounded-lg outline outline-2 focus:outline-4 focus:outline-gray-300
                       pl-2 bg-transparent text-gray-100"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="p-8 flex">
          <label className="text-gray-200">Password</label>
          <input
            className="my-auto m-11 h-12 w-100 rounded-lg outline outline-2 focus:outline-4 focus:outline-gray-300
                       pl-2 bg-transparent text-gray-100"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="grid p-10 place-items-center">
          <PageButton title="Login" type="button" onclick={handleLoginClick} className="font-bold bg-black text-gray-300 
                          outline outline-4 outline-gray-400 hover:bg-gray-800"/>
        </div>
      </form>
    </div>
  );
}
