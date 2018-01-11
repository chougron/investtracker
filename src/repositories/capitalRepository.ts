import Auction from '../models/auction'
import Capital from '../models/capital'
import Crypto from '../models/crypto'

export default class CapitalRepository {

  static getSaved(): Array<Capital> {
    return [
      new Auction('Facebook','FB',198.28),
      new Auction('Alibaba','BABA',172.51),
      new Crypto('Bitcoin','BTC',14255.25),
      new Crypto('Ripple','RPX',2.63),
      new Auction('Facebook','FB',198.28),
      new Auction('Alibaba','BABA',172.51),
      new Crypto('Bitcoin','BTC',14255.25),
      new Crypto('Ripple','RPX',2.63),
      new Auction('Facebook','FB',198.28),
      new Auction('Alibaba','BABA',172.51),
      new Crypto('Bitcoin','BTC',14255.25),
      new Crypto('Ripple','RPX',2.63),
      new Auction('Facebook','FB',198.28),
      new Auction('Alibaba','BABA',172.51),
      new Crypto('Bitcoin','BTC',14255.25),
      new Crypto('Ripple','RPX',2.63)
    ]
  }
}
