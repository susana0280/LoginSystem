export  const initialState={
    isopen:false,
    // user:null
}

export const actionTypes={

    TOGGLE_MENU:'TOGGLE_MENU',
    // SET_USER:'SET_USER'

}

//escucha si en algún punto "de la manguera de datos" se han inyectado datos

 const reducer=(state,action)=>{
  
    console.log(action)
   
    switch(action.type){

        case actionTypes.TOGGLE_MENU:
          
            return {
                ...state,
                isopen:action.isopen
            }

        // case actionTypes.SET_USER:

        // return {
        //     ...state,
        //     user:action.user
        // }
            default: return state 
    }
  

}

export default reducer;