import { $userToken } from "@/helpers/userToken" //api for customer

function request<T = any>(url: string, options?: { headers?: object; body?: object; params?: object; method: string }) {
  const token: string = $userToken.get()

  const newOptions = Object.assign(options || {}, {
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  })
  return $fetch<T>(`http://ergodnc.test${url}`, newOptions)
}
function get<T = any>(url: string, opts?) {
  return request<T>(url, Object.assign(opts || {}, { method: 'GET' }))
}
function post<T = any>(url: string, opts?) {
  return request<T>(url, Object.assign(opts || {}, { method: 'POST' }))
}
function put<T = any>(url: string, opts?) {
  return request<T>(url, Object.assign(opts || {}, { method: 'PUT' }))
}
function _delete<T = any>(url: string, opts?) {
  return request<T>(url, Object.assign(opts || {}, { method: 'DELETE' }))
}
export const $apiUser = { get, post, put, delete: _delete, request }
