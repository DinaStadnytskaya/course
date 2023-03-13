import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALESTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
   username: string;
   password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue:string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('Login failed');
            }
            localStorage.setItem(USER_LOCALESTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
