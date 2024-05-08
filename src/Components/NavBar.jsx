import logo from "../images/Vector.png";
function Navbar() {
  return (
    <div class="bg-white rounded-[65.28px] shadow flex justify-between items-center p-4 w-1392 h-111.17 border-t border-gray-300 m-4 ">
      <img
        src={logo}
        alt="Brunel_Logo"
        className="h-5 w-121px object-cover top-[7.86px] left-[6.78px]"
      />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button className="text-blue-500">Get Projects</button>
          </li>
          <li>
            <button className="text-blue-500">Onboard Talent</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
