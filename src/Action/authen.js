import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = ({email, password,remember}) => async (dispatch) => {
    if (!email || !password) return;
  
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: {
          email,
          password,
          remember
        },
      },
    });
  
    dispatch(setUser(email, password,remember));
  };

  export const setUser = (email, password,remember) => async (dispatch) => {
    await AsyncStorage.setItem('@email', email);
    await AsyncStorage.setItem('@password', password);
    await AsyncStorage.setItem('@remember', remember);
    
  };
