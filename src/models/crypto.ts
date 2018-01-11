import Capital, { CapitalType } from './capital'

export default class Crypto extends Capital {

  constructor(
    name: string,
    abbreviation: string,
    currentPrice: number
  ) {
    super(name, abbreviation, CapitalType.Crypto, currentPrice)
  }
}
