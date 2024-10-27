import axios from "axios";

export const fetchUsers = async () => {
    const response = await axios.get('http://localhost:8085/api/v1/user/get');
    // console.log("res", response.data);
    return response.data;
};

export const addUser = async (formData) => {
    // console.log("frm", formData);
    
    try {
        const response = await axios.post('http://localhost:8085/api/v1/user/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in addUser:", error);
        throw error;
    }
};
