import axios from "axios"

export const getContacts = async () => {
    const { data } = await axios.get(
      'https://648d72132de8d0ea11e7d858.mockapi.io/contacts'
    );
    return data
}

export const postContact = async () => {
  const { data } = await axios.post(
    'https://648d72132de8d0ea11e7d858.mockapi.io/contacts'
  );
  return data;
};

export const deleteContact = async (id) => {
    const { data } = await axios.delete(
        `https://648d72132de8d0ea11e7d858.mockapi.io/contacts/${id}`);
    return data;
}