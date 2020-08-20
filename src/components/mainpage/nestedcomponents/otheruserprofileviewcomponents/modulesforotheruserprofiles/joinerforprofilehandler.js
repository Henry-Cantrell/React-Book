import {favTweedsFetch} from './favtweedsfetch'
import {personalTweedsFetch} from './personaltweedsfetch'

export function joinerForTweedsFromFB (uid) {
    console.log(uid)
    personalTweedsFetch(uid);
    favTweedsFetch(uid);
}