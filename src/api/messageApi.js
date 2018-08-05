import http from '@/http'

export function getMessages(filters) {
  if (filters['q'] == "") delete filters["q"]
  if (filters['color'] == "") delete filters["color"]

  return http.get('/messages', { params: { ...filters } })
}

export function postMessage(message) {
  return http.post('/messages', message)
}
