import { Headquarters } from "./components/headquarters/headquarters";
import { Rockets } from "./components/rockets/rockets";

export default async function Home() {
  return (
    <div className={"bg-black"}>
      <img
        className={
          "heading text-center text-3xl uppercase justify-center flex items-center font-bold text-black mt-4 w-52 h-40 transform scale-100"
        }
        src={"spaceXlogo.jpg"}
        alt="SpaceX Logo"
      ></img>
      <Headquarters />

      <h1 className="heading text-center mb-10 text-2xl font-bold pt-32 max-width text-white">
        Rockets
      </h1>
      <Rockets />
    </div>
  );
}
