const authApi = '/api/auth/';
const postApi = '/api/post/';
const getApi = '/api/get/';



const AUTH={
    USERSIGNUP:`${authApi}/signup`,
    USERLOGIN:`${authApi}/login`
}
const POST={
    ADDTEAM:`${postApi}/addteam`,
    DELETETEAM:`${postApi}/deleteteam`
}
const GET={
    GETTEAM:`${getApi}/getteam`
}

export {AUTH,POST,GET}