import Capital, { CapitalType } from './capital'

export default class Auction extends Capital {

  constructor(
    name: string,
    abbreviation: string,
    currentPrice: number
  ) {
    super(name, abbreviation, CapitalType.StockAuction, currentPrice)
  }
}
