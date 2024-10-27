import React, { useState } from 'react';

function AddUserModal({ onClose, onAddUser }) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async() => {
        if (!name || !mobile || !photo) {
            alert("All fields are required!");
            return;
        }
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('photo', photo); // Ensure photo is added if selected
    
        // Log FormData contents using entries
        // console.log("Logging FormData entries:");
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
    
        // Convert FormData to a plain object for logging
        const formDataObject = {};
        for (let [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }
        // console.log("FormData Object:", formDataObject);
    
        // Log FormData directly (may appear empty)
        // console.log("FormData Direct Log:", formData);
    
        await onAddUser(formDataObject);
        onClose();
    };
    

    return (
        <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            background: 'white', padding: '20px', border: '1px solid black', borderRadius: '8px'
        }}>
            <h2 className='text-center font-bold'>Add New User</h2>
            <input className='border-2 border-black w-full h-10 mt-3 text-center rounded-md' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className='border-2 border-black w-full h-10 mt-3 text-center rounded-md' type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input className='mt-3 ' type="file" onChange={(e) => setPhoto(e.target.files[0])} />
            <button className='mt-4 p-2 bg-green-500 rounded-md text-md font-bold text-white' onClick={handleSubmit}>Add User</button>
            <button className='mt-4 p-2 bg-blue-500 ml-6 rounded-md text-md font-bold text-white' onClick={onClose}>Cancel</button>
        </div>
    );
}

export default AddUserModal;
