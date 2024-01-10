export default class MapTextItem {
  constructor(regionId, text, type, x, y) {
    this.regionId = regionId
    this.text = text
    this.type = type // Major, Minor
    this.x = x
    this.y = y
  }
}
