import logo from "@/assets/natzca-logo.svg";
import { Explorer } from "./components/explorer";

function App() {
  const data = ["/root/test", "/dev/null", "/root/something/somewhere"];
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex flex-col w-64">
        <div className="flex items-center justify-center h-16 bg-[#0f1649] border-b border-[#2539bbc9]">
          <span className="text-white font-bold uppercase">
            <img src={logo}></img>
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-[#2538bb]">
            <span className="text-white font-bold">
              <Explorer data={data}></Explorer>
            </span>
          </nav>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-[#0f1649] border-b border-[#2539bbc9]"></div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">representing /Path/to/success</h1>
          <br />
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">- root </p>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {"    "}- test
          </p>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {"    "}- something{" "}
          </p>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {"    "}
            {"    "}- somewhere{" "}
          </p>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {"    "}- dev{" "}
          </p>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {"    "}
            {"    "}- null
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
