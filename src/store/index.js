import { observable, action } from 'mobx'

const store = observable(
  {
    openImage: '',
    setOpenImage(id) {
      this.openImage = id
    }
  },
  {
    setOpenImage: action
  }
)

export default store
