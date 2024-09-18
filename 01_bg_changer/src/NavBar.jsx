/* eslint-disable react/prop-types */
const NavBar = ({ setColor }) => {
  return (
    <div className="w-2/3 flex justify-around bg-gray-200 py-3 rounded-lg shadow-md mb-5">
      <button onClick={() => setColor("bg-red-600")} className="btn bg-red-600">
        Red
      </button>
      <button
        onClick={() => setColor("bg-yellow-600")}
        className="btn bg-yellow-600"
      >
        Yellow
      </button>
      <button
        onClick={() => setColor("bg-green-600")}
        className="btn bg-green-600"
      >
        Green
      </button>
      <button
        onClick={() => setColor("bg-cyan-600")}
        className="btn bg-cyan-600"
      >
        Cyan
      </button>
      <button
        onClick={() => setColor("bg-purple-600")}
        className="btn bg-purple-600"
      >
        Purple
      </button>
      <button onClick={() => setColor("bg-black")} className="btn bg-black">
        Black
      </button>
      <button
        onClick={() => setColor("bg-white")}
        className="btn bg-white text-black"
      >
        White
      </button>
    </div>
  );
};

export default NavBar;
