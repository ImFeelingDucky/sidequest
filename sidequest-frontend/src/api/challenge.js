import { requests } from '../utils/requests'

let testing = true

const challenges = [
  {
    id: 100,
    name: 'Do Pushups',
    type: 'quantityBased', //As opposed to timeBased
    quantity: '40'
  }
]

export const challenge = {
  id: 100,
  name: 'Do Pushups',
  type: 'quantityBased', //As opposed to timeBased
  quantity: '40'
}

export default {
  getChallengeById () {
    let res = testing
      ? // ? challenges.filter(id === challengeId)[0]
        {
          id: 100,
          name: 'Do Pushups',
          type: 'quantityBased', //As opposed to timeBased
          quantity: '40'
        }
      : requests.get(`/challenge?id=${encodeURIComponent(id)}`)

    return res
  }
}
