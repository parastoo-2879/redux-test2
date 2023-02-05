// import {
//   createAction,
//   createReducer
// } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
// export const ITEM_ADD = createAction("itemAdd")
// export const ITEM_REMOVE = createAction("itemRemove")
// export const ITEM_REDUCE = createAction("itemReduce")

let lastId = 0

const slice = createSlice({
  name :"item",
  initialState:[],
  reducers:{
    itemadd:(items,action)=>{
      let itemadd = items.filter(item => item.name === action.payload.name)
      if (itemadd.length) {
        return items.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              number: item.number + 1
            }
          } else {
            return item
          }
        })
      } else {
        items.push({
          id: ++lastId,
          name: action.payload.name,
          number: 1
        })
      }

    },
    itemReduce:(items,action)=>{
      let itemReduce = items.filter(item=>item.name===action.payload.name)
      if(itemReduce.length){
        return items.map(item=>{
          if(item.name===action.payload.name){
            return {...item,number:item.number-1}
          }else{
            return item
          }
        })
      }
    },
    itemRemove:(items,action)=>{
      return items.filter(item=>item.id===action.payload.id)
    }
  }
})
console.log(slice)
export const {itemadd,itemReduce,itemRemove} = slice.actions
export default slice.reducer

// export default createReducer([], {
//   [ITEM_ADD.type]: (state, action) => {
   
//   },
//   [ITEM_REDUCE.type]:(state,action)=>{

//   },
//   [ITEM_REMOVE.type] :(state,action)=>{
 
//   }
// })

// export const itemAdd = (name) => ({
//   type: ITEM_ADD,
//   payload: {
//     name
//   }
// })

// export const itemRemove = (id) => ({
//   type: ITEM_REMOVE,
//   payload: {
//     id
//   }
// })

// export const itemReduce = (name) => ({
//   type: ITEM_REDUCE,
//   payload: {
//     name
//   }
// })



// export default function reducer(state = [], action) {

//   if (action.type === ITEM_ADD) {
//     let itemAdd = state.filter(item => item.name === action.payload.name)
//     console.log(itemAdd)
//     if (itemAdd.length) {
//       return (
//         state.map(item => {
//           if (item.name === action.payload.name) {
//             return {
//               ...item,
//               number: item.number + 1
//             }
//           } else {
//             return item
//           }
//         })
//       )
//     } else {
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           name: action.payload.name,
//           number: 1
//         }
//       ]
//     }

//   } else if (action.type === ITEM_REDUCE) {
//     let itemReduce = state.filter(item => item.name === action.payload.name)
//     console.log(itemReduce)
//     if (itemReduce.length) {
//       return (
//         state.map(item => {
//           if (item.name === action.payload.name) {
//             return {
//               ...item,
//               number: item.number - 1
//             }
//           } else {
//             return item
//           }
//         })
//       )
//     }
//   } else if (action.type === ITEM_REMOVE) {
//     return state.filter(item => item.id !== action.payload.id)
//   } else {
//     return state
//   }
// }