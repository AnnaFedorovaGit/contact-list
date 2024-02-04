import axios from 'axios';


const api = axios.create({
    baseURL: 'https://65bbdfca52189914b5bd4157.mockapi.io/'
})

export const fetchContacts = async () => { 
    const { data } = await api.get('/contacts')
	return data
}

export const addContact = async (newContact) => { 
    const { data } = await api.post('/contacts', newContact)
	return data
}

export const deleteContact = async (contactId) => { 
    const { data } = await api.delete(`/contacts/${contactId}`)
	return data
}
