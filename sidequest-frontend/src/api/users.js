import { requests } from '../utils/requests'

let testing = true

export default {
  getUserById (id) {
    let res = testing
      ? {
          id: 2,
          name: 'Max',
          challengeGroups: [
            {
              ids: [80]
            }
          ]
        }
      : requests.get(`/users?id=${encodeURIComponent(id)}`)

    return res
  }
}
