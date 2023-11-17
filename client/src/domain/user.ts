type Role = 'author' | 'reader'
type Platform = '네이버시리즈' | '카카오페이지' | '네이버웹소설' | '카카오스테이지' | '문피아' | '조아라' | '기타'

interface User{
    email: string
    nickname: string
    gender: string
    age: number
    phone: number
    role: Role
}

export interface Author extends User {
    career?: number
    platform?: Platform[]
}

export interface Reader extends User {
    experience?: number
    platform?: Platform[]
}