let initialState = {
    words: 'go here',
    username: '',
    password: '',
    id: 0,
    photo: '',
    allPosts: [],
    userPosts: [],
}


export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: payload })
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: payload })
        case UPDATE_USER_ID:
            return Object.assign({}, state, { id: payload })
        case UPDATE_USER_PICTURE:
            return Object.assign({}, state, { photo: payload })
        case UPDATE_ALL_POSTS:
            return Object.assign({}, state, { allPosts: payload })
        case UPDATE_USER_POSTS:
            return Object.assign({}, state, { userPosts: payload })

        default:
            return state;
    }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_USER_ID = 'UPDATE_USER_ID';
const UPDATE_USER_PICTURE = 'UPDATE_USER_PICTURE';
const UPDATE_ALL_POSTS = 'UPDATE_ALL_POSTS';
const UPDATE_USER_POSTS = 'UPDATE_USER_POST';


export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updatePassword(password) {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function updateUserId(id) {
    return {
        type: UPDATE_USER_ID,
        payload: id
    }
}

export function updateUserPicture(photo) {
    return {
        type: UPDATE_USER_PICTURE,
        payload: photo
    }
}

export function updateAllPosts(posts) {
    return {
        type: UPDATE_ALL_POSTS,
        payload: posts
    }
}

export function updateUserPosts(posts) {
    return {
        type: UPDATE_USER_POSTS,
        payload: posts
    }
}
