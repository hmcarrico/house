const initialState = {
    name: '',
    adress: '',
    city: '',
    homeState: '',
    morgage: '',
    rent: '',
    url: ''
}

const UPDATE_NAME='UPDATE_NAME';
const UPDATE_ADDRESS='UPDATE_ADDRESS';
const UPDATE_CITY='UPDATE_CITY';
const UPDATE_STATE='UPDATE_STATE';
const UPDATE_URL='UPDATE_URL';
const UPDATE_RENT='UPDATE_RENT';
const UPDATE_MORGAGE='UPDATE_MORGAGE';


export default function reducer (state=initialState, action){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload})

        case UPDATE_ADDRESS:
        return Object.assign({}, state, {address: action.payload})

        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload})

        case UPDATE_STATE:
        return Object.assign({}, state, {homeState: action.payload})

        case UPDATE_URL:
        return Object.assign({}, state, {url: action.payload})

        case UPDATE_RENT:
        return Object.assign({}, state, {rent: action.payload})

        case UPDATE_MORGAGE:
        return Object.assign({}, state, {morgage: action.payload})

        default:
        return state
    }
}

export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateHomeState(homeState){
    return {
        type: UPDATE_STATE,
        payload: homeState
    }
}

export function updateUrl(url){
    return {
        type: UPDATE_URL,
        payload: url
    }
}

export function updateRent(rent){
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function updateMorgage(morgage){
    return {
        type: UPDATE_MORGAGE,
        payload: morgage
    }
}