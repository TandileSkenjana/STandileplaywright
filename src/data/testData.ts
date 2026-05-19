export interface UserCredential{
    email: string;
    password:string;
    courseName?: string;

}

export const validUser: Record<string, UserCredential> ={
    admin:{
        email: 'admin@gmail.com',
        password: '@12345678'
    },

    standardUser:{
        email:'tandileskenjana@gmail.com',
        password: 'Tandile#2000'
    },

    instructorUser:{
        email:'instructor@gmail.com',
        password: '@12345678'
    },

    student:{
        email:'Carrol Keeling',
        password: '@12345678'
    }

}

export const courseData = {
    courseName: 'Test 12354'
    }
