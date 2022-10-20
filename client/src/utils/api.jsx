const authApi = '/api/auth/';
const postApi = '/api/post/';
const getApi = '/api/get/';



const AUTH={
    USERSIGNUP:`${authApi}/signup`,
    USERLOGIN:`${authApi}/login`
}
const POST={
    ADDTEAM:`${postApi}/addteam`,
    DELETETEAM:`${postApi}/deleteteam`,
    ADDMEMBER:`${postApi}/addmember`,
    GETTEAMBYLOGINUSER:`${postApi}/getmemberbyloginuser`,
    EDITTEAMNAME:`${postApi}/editteamname`
}
const GET={
    GETTEAM:`${getApi}/getteam`,
    GETMEMBERS:`${getApi}/getmembers`
}

export {AUTH,POST,GET}