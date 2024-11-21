/*  B"H
 */

const API_URL = 'https://localhost:5001/api/'

export function rest<T>(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())
}

export function api<T>(url: string) {
  return rest<T>(API_URL + url)
}
