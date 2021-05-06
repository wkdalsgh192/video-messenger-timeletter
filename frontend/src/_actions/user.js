import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

// exports.logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
//   // throw new Error('비밀번호가 틀렸습니다.');
//   return await delay(500,{
//     userId: 1,
//     nickname: 'zerocho'
//   });
// });

export const signUp = createAsyncThunk('user/signUp', async (data, thunkAPI) => {
  console.log(data,'1232131')
  const response = await axios.post('http://k4d105.p.ssafy.io:8080/user/join',data).then((res)=>console.log(res)).catch((err)=>console.log(err))
  console.log(data)
  return response.data;

});
