export default abstract class Capital {
  /** The unique identifier of the capital */
  public uuid: string | null
  /** The name of the capital */
  public readonly name: string
  /** The abbreviation of the capital */
  public readonly abbreviation: string
  /** What does the capital represent */
  public readonly capitalType: CapitalType
  /** The current price of the capital */
  public currentPrice: number

  constructor(
    name: string,
    abbreviation: string,
    capitalType: CapitalType,
    currentPrice: number
  ) {
    this.name = name
    this.abbreviation = abbreviation
    this.capitalType = capitalType
    this.currentPrice = currentPrice
  }
}

export enum CapitalType {StockAuction, Crypto}
