import {otherUserFavTweeds} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserfavoritetweedsnet'
import {clearTweedOtherUserFav} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserFavs'
import firebase from 'firebase'

export function favTweedsFetch (uid) {
    firebase
        .firestore()
        .collection('favoriteTweeds')
        .doc(uid)
        .collection('tweedsFavoritedByUser')
        .get()
        .then(
            clearTweedOtherUserFav()
        )
        .then(
            items => items.forEach((item) => {
                otherUserFavTweeds({
                    uid: item.data().uid,
                    id: item.data().id,
                    username: item.data().username,
                    tweed: item.data().tweed
                })
            })
        )
}