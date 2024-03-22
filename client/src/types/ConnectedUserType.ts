export interface ConnectedUserType {
  uid: string
  socketId: string
  displayName: string
  userIcon?: {
      foregroundImage: string
      backgroundImage: string
  }
  location: {
      lat: number
      lon: number
      geohash: string
  }
}
