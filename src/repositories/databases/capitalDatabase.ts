import Dexie from 'dexie'
import Capital from '../../models/capital'

export default class CapitalDatabase extends Dexie {
  capitals: Dexie.Table<Capital, string>

  constructor() {
    super("Capital");
    this.version(1).stores({
      capitals: 'uuid, name, abbreviation, capitalType, currentPrice'
    });

    this.capitals.mapToClass(Capital)
  }
}