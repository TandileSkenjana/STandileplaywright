export interface UserCredential{
    email: string;
    password:string;

}

export const validUser: Record<string, UserCredential> ={
    admin:{
        email: 'admin@agmail.com',
        password: '@12345678'
    },

    standardUser:{
        email:'tandileskenjana@gmail.com',
        password: 'Tandile#2000'
    },

    instructorUser:{
        email:'instructor@agmail.com',
        password: '@12345678'
    }

}
