import { defineStore } from 'pinia'
import { IComponentChildrenType } from '@/views/Home/components/data'

interface IDrawStateType {
  drawList: IComponentChildrenType[]
  currMove: IComponentChildrenType
}

export const useDrawStore = defineStore('app-draw', {
  state: (): IDrawStateType => {
    return {
      drawList: [],
      currMove: {}
    }
  },
  actions: {
    setDrawList(drawList: IComponentChildrenType[]) {
      this.drawList = drawList
    },

    setCurrMove(currMove: IComponentChildrenType) {
      this.currMove = currMove
    }
  }
})
