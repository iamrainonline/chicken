import axios from "axios";

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/createUser",
      newUser
    );
    console.log("User created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
