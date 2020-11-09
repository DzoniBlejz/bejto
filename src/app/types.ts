export interface SearchResponseWeather{
    
}

export interface User {
    id: number;
    name : string;
    password : string;
    email : string;
    role?: Role;
    pol:Pol;
}

export enum Pol {
    Musko  = 'musko',
    Zensko = 'zensko',
    SamoNek = "samo nek je normalno"
}

export enum Role {

    Admin = 'Administrator',
    User = 'User'
}

export interface LoginDto{
    name: string;
    email: string;
    password : string;
}

export interface UserReg{

    name: string;
    password: string;
    email:string;
}

export interface RegisterDto {
    email: string;
    password: string;
    name: string;
    pol:Pol;
}

export interface Movie{
    Search: Movie[]
    Title : string;
    year: string;
    Poster: string;
    release: string;
    imdbID: string;
    type: string;
}

export const USERSreg : UserReg[] = []

export const USERS : User[] = [
    {
        id: 1,
        name: 'Dzoni',
        password : 'dzoni',
        email: 'dzoni@gmail.com',
        role: Role.Admin,
        pol:Pol.Musko
    },
    {
        id: 2,
        name: 'Jaksa',
        password : 'jaksa',
        email: 'jaksa@gmail.com',
        pol:Pol.Musko
    }

]