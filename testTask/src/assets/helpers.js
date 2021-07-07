export default function getCurrentDay () {
  return Math.floor(new Date().getTime()/(1000*60*60*24))
}