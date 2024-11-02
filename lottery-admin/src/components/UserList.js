import React from 'react';

function UserList({ users }) {
    return (
        <>
        <h1 className='text-lg font-bold text-center pt-10'>All Users List</h1>
        <div className='flex flex-wrap justify-center p-4 gap-3'>
            
            {users.map((user) => (
                <div key={user._id} className='w-[90px] border border-gray-300 bg-white text-center shadow-lg'>
                    <img className='w-full h-[100px]' src={`https://ltback.rscjewells.shop/${user.photo}`} alt={user.name}  />
                    <h3 className='text-sm font-bold mt-4'>{user.name}</h3>
                    <p className='text-sm font-bold'>{user.mobile}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default UserList;
