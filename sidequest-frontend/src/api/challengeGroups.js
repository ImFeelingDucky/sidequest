import { requests } from '../utils/requests'

let testing = true

export default {
  getChallengeGroupSingular (id) {
    let res = testing
      ? {
          id: 80,
          name: 'Dack for Dado',
          description: 'We want to be more active and get shredded.',
          members: { ids: [1, 2] },
          challenges: { ids: [100] }
        }
      : requests.get(`/challengeGroups?id=${encodeURIComponent(id)}`)

    return res
  }

  // getUserChallengeGroups (id) {
  //   let res = testing
  //     ? {
  //         id: 80,
  //         name: 'Dack for Dado',
  //         description: 'We want to be more active and get shredded.',
  //         members: { ids: [1, 2] },
  //         challenges: { ids: [100] }
  //       }
  //     : requests.get(`/challengeGroups?id=${encodeURIComponent(id)}`)

  //   return res
  // }
}
