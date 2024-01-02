const initState = {
    themeId: 1,
}

export type TThemeState = typeof initState

export const themeReducer = (state: TThemeState = initState, action: ActionsType): TThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type ActionsType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID'  as const, id }) // fix any
