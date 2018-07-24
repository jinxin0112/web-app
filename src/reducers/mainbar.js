const defaultMainbars = [
    {
        text: 'home'
    }
]

const mainbar = (state=defaultMainbars,action) => {
    switch(action.type){
        case 'ok':
            return state
        default:
            return state
    }
}

export default mainbar