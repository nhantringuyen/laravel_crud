export interface ApiResponse {
    status: boolean
    message?: string
}
export interface LoginResponse {
    token?: string
    status?: boolean
    message?: string
}
export interface OneResOf<T> extends ApiResponse {
    one?: T
}

export interface ListResOf<T> extends ApiResponse {
    list?: Array<T>
    total?: number
}
export interface BulkResOf<T> extends ApiResponse {
    errors?: Array<T>
}

export interface DataResOf<T> extends ApiResponse {
    data?: T
}

export interface ExportRes extends ApiResponse {
    url?: string
}
