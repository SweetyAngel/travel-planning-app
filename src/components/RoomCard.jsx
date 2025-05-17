function RoomCard({ name, status, date, options, images }) {
    return (
      <div className="bg-gray-300 p-4 rounded-lg shadow-inner">
        <div className="flex justify-between mb-2 text-red-500 font-semibold">
          <span>{name}</span>
          <span>{status}</span>
        </div>
        <p className="mb-2 font-bold">Дата: {date}</p>
        <p className="mb-2 font-semibold">Варианты:</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {options.map((option, i) => (
            <div key={i} className="bg-sky-100 text-center p-2 rounded-lg">
              <div className="font-bold">{option}</div>
              {images[i] && (
                <img
                  src={images[i]}
                  alt={option}
                  className="w-full h-24 object-cover mt-2 rounded"
                />
              )}
              <div className="mt-2">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        <button className="bg-green-300 hover:bg-green-400 px-4 py-2 rounded-md font-semibold">
          Голосовать
        </button>
      </div>
    );
  }

  export default RoomCard;
