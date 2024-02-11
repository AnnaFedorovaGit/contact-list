import axios from 'axios';


const apiInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    // headers: {
    //     Authorization: 'Bearer ...'
    // }
})

export const setToken = (token) => { 
    apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const requestRegister = async (formData) => { 
    const { data } = await apiInstance.post('/users/signup', formData);
    setToken(data.token);
	return data
}

export const requestLogin = async (formData) => { 
    const { data } = await apiInstance.post('/users/login', formData);
    setToken(data.token);
	return data
}

export const requestRefreshUser = async () => { 
    const { data } = await apiInstance.get('/users/current');
    return data
}

export const requestLogout = async () => { 
    const { data } = await apiInstance.post('/users/logout');
	return data
}

export const requestFetchContacts = async () => { 
    const { data } = await apiInstance.get('/contacts');
	return data
}

export const requestAddContact = async (newContact) => { 
    const { data } = await apiInstance.post('/contacts', newContact);
	return data
}

export const requestDeleteContact = async (contactId) => { 
    const { data } = await apiInstance.delete(`/contacts/${contactId}`);
	return data
}
