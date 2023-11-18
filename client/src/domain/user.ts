export type Role = 'author' | 'reader'
export type Platform = '네이버시리즈' | '카카오페이지' | '네이버웹소설' | '카카오스테이지' | '문피아' | '조아라' | '없음'

interface User{
    nickname: string
    gender: string
    age: string
    email: string
    password: string
    phone: string
    role: Role
}

export interface Author extends User {
    career?: string
    platform?: Platform[]
}

export interface Reader extends User {
    experience?: string
    platform?: Platform[]
}