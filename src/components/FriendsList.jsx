import { Link } from 'react-router-dom';

function FriendsList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Мои друзья</h2>
        <Link
          to="/add-friend"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Добавить друга
        </Link>
      </div>
      {/* Остальной код списка друзей */}
    </div>
  );
}
