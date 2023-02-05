import {
  createSlice
} from "@reduxjs/toolkit";

let lastId = 0
const slice = createSlice({
  name: "project",
  initialState: [],
  reducers: {
    addPro: (projects, action) => {
      let pro = projects.filter(pro => pro.name === action.payload.name)
      console.log("pro is :", pro)
      if (pro.length) {
        let index = projects.find(pro => pro.name === action.payload.name)
        console.log("index is :", index.name)
        index.number = index.number + 1
      } else {
        projects.push({
          id: ++lastId,
          name: action.payload.name,
          number: 1,
          status: "undone"
        })
      }
    },
    removePro: (projects, action) => {
      return projects.filter(pro => pro.id !== action.payload.id)
    },
    reducePro: (projects, action) => {
      let pro = projects.filter(pro => pro.name === action.payload.name)
      if (pro.length) {
        let index = projects.find(pro => pro.name === action.payload.name)
        index.number = index.number - 1
      }
    },
    reStatus: (projects, action) => {
      let index = projects.find(pro => pro.id === action.payload.id)
      index.status = "done"
    }
  }
})



console.log("proSlice is :", slice)
export const {
  addPro,
  removePro,
  reducePro,
  reStatus
} = slice.actions
export default slice.reducer