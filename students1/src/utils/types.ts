export type Department ={
    id?: number,
    name: string,
    shortName: string,
    phone: string
}

export type Student={
    id?: number,
    studentNo: string,
    name: string,
    email:string,
    phone: string,
    sex: string,
    departmentId: number,
    departmentId_data?: Department
}