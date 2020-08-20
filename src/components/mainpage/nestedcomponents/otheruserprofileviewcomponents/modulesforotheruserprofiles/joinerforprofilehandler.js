import {favTweedsFetch} from './favtweedsfetch'
import {personalTweedsFetch} from './personaltweedsfetch'

export function joinerForTweedsFromFB (uid) {
    personalTweedsFetch(uid);
    favTweedsFetch(uid);
}