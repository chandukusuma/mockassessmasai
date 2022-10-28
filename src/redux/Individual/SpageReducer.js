const Spage = []

export const SpageReducer = (state = Spage, action) => {
    switch (action.type){

        case 'SHOW_DATA': 
            return {
                Spage: [action.payload]
            }
            
        default:
            return state
    }
}
