import { Link } from "react-router-dom";

function Banner({ isLoggedIn, onOpenLogin, onOpenRegister }) {
  return (
    <section className="bg-blue-100 rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Windmill_in_Russian_open_air_museum.jpg/800px-Windmill_in_Russian_open_air_museum.jpg"
          alt="windmill"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col justify-center items-center text-white text-xl font-medium">
          <p>Сервис по планированию совместного путешествия</p>
          {isLoggedIn ? (
            <Link to="/create-voting">
              <button className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-md font-bold">
                Начать голосование
              </button>
            </Link>
          ) : (
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-md font-bold"
              onClick={onOpenLogin}
            >
              Авторизоваться
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
