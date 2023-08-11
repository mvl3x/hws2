import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { 
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((current, next) => {
                    if (current.name > next.name){
                        return action.payload === "up" ? 1 : -1;
                    } else if (current.name < next.name) {
                        return action.payload === "up" ? -1 : 1;
                    } else {
                        return 0;
                    }
                })
        }
        case 'check': {
            return state.filter(user => user.age > action.payload)
        }
        default:
            return state;
    }
}
