import { get } from "http";

var storage = {
  set(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key, value){
    return JSON.parse(localStorage.getItem(key))
  }
}
export default storage