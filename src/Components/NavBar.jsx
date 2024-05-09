import logo from "../images/Vector.png";
import Button from "./Button";
function Navbar() {
  return (
    <div class="bg-white rounded-[65.28px] shadow flex justify-between items-center p-4 w-1392 h-111.17 border-t border-gray-300 m-4 ">
      <img
        src={logo}
        alt="Brunel_Logo"
        className="h-[30.5px] w-[121px] object-cover top-[7.86px] left-[7.78px]"
      />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button to="./registration">Get Projects</Button>
          </li>
          <li>
            <Button to="/">Onboard Talent</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
