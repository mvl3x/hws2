const initState = {
    isLoading: false,
}
type TLoadingState = {
    isLoading: boolean;
}
export const loadingReducer = (state = initState, action: LoadingActionType): TLoadingState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
