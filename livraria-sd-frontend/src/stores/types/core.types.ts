export type Session = {
    auth: boolean,
    id: string;
    name: string,
    email: string,
}

export type UserData = {
    name: string,
    email: string,
}

export type MyBook = {
    name: string,
    author: string,
    price: string,
}

export type Book = {
    name: string,
    author: string,
    price: string,
}

export type CreateBookDto = {
    name: string,
    author: string,
    price: string,
    email: string
}