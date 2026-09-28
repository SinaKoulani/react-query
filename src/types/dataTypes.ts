// this is the type of data we about to make request with it.


export interface  About {
    email : string;
    name : string;
    job: string;
    bio : string;
}


export interface Home {
    name : string ;
    job : string ;
    bio : string ;
    skills : string ;
    social : string ;

}

export interface Login{
    email : string;
    password : string;
}

export interface Signup{
    email : string;
    password : string;
    name : string;
}