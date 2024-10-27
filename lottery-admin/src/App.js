import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import AddUserModal from './components/AddUserModal';
import { fetchUsers, addUser } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLotteryModalOpen, setLotteryModalOpen] = useState(false);


  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    loadUsers();
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
  };

  return (
    <div className="bg-blue-300 h-full">
      {/* Background container that will be blurred */}
      <div className={`${isModalOpen ? 'blur-sm' : ''}`}>
      <button
          className="bg-yellow-600 p-2 w-28 rounded-lg text-white font-semibold fixed bottom-32 right-3"
          onClick={() => setLotteryModalOpen(true)}
        >
          Lottery
        </button>
        <button
          className="bg-green-500 p-2 w-28 rounded-lg text-white font-semibold fixed bottom-20 right-3"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
        <UserList users={users} />
      </div>

      {/* Modal with backdrop */}
      {isModalOpen && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black opacity-30"></div>

          {/* Modal component */}
          <AddUserModal
            onClose={() => setModalOpen(false)}
            onAddUser={handleAddUser}
          />
        </>
      )}
    </div>
  );
}

export default App;
