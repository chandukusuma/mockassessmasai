const INIT = {
    Spage : []
}

export const SpageReducer = (state = INIT, action) => {
    switch (action.type){
        case 'SHOW_DATA': 
                return {
    
                    Spage: [action.payload]
                }
            default:
                return state
    }
}

