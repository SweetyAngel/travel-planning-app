import RoomCard from "./RoomCard";

// TODO: api /getRooms

const dummyRooms = [
  {
    name: "Едем чилить",
    status: "Голосование идет",
    date: "от-дo",
    options: ["Турция", "Краснодар", "Сочи"],
    images: [null, null, "https://upload.wikimedia.org/wikipedia/commons/e/e7/Sochi_sign_with_palms.jpg"]
  },
  {
    name: "Отдыхаем летом 2024",
    status: "Проголосуйте",
    date: "от-дo",
    options: ["Париж", "Египет", "Китай"],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      null,
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/China_traditional_buildings.jpg"
    ]
  }
];

function RoomList() {
  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold bg-yellow-200 inline-block px-3 py-1 rounded-md mb-4">Мои комнаты</h2>
      <div className="space-y-6">
        {dummyRooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
