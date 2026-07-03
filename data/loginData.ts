export const loginData = [

    {
        title: 'Valid Login',
        username: 'standard_user',
        password: 'secret_sauce',
        success: true
    },

    {
        title: 'Wrong Username',
        username: 'wrong_user',
        password: 'secret_sauce',
        success: false
    },

    {
        title: 'Wrong Password',
        username: 'standard_user',
        password: 'wrong_password',
        success: false
    },

    {
        title: 'Empty Username',
        username: '',
        password: 'secret_sauce',
        success: false
    },

    {
        title: 'Empty Password',
        username: 'standard_user',
        password: '',
        success: false
    }

];