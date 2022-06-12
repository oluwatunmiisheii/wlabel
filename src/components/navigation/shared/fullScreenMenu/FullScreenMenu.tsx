import { FC } from "react"
import { Link } from "react-router-dom";
import DroneImage from "assets/images/Drone.png";
import LogoAllWhite from "assets/images/LogoAllWhite.png";

export const FullScreenMenu: FC<{close: () => void}> = ({ close }) => {
  return (
    <div className="block fixed inset-0 z-10 w-full h-full">
      <div className="relative m-auto p-0 h-screen bg-[#ef5f1e] w-full px-10">
        <div className="py-[16px] px-[16px] border-0 flex justify-between items-center">
          <div />
          <img className="w-2/5 md:w-[14%] object-contain" src={LogoAllWhite} alt="logo" />
          <button className="text-white text-4xl opacity-100" onClick={close}>
            &times;
            <span className="sr-only">close</span>
          </button>
        </div>
        <div className="flex justify-between w-[70%] items-center mx-auto mt-32">
          <div className="md:block hidden">
            <img src={DroneImage} alt="drone" className="md:w-[45%] w-6/12 object-cover" />
          </div>
          <div className="text-right">
            <Link to="/" className="text-white uppercase block font-bold text-3xl">
              store
            </Link>
            <Link to="/" className="text-white uppercase block font-bold text-3xl">
              tutorials
            </Link>
            <Link to="/" className="text-white uppercase block font-bold text-3xl">
              blogs
            </Link>
            <Link to="/" className="text-white uppercase block font-bold text-3xl">
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
