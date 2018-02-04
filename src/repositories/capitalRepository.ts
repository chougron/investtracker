import Capital, { CapitalType } from '../models/capital'
import {v4 as uuid} from 'uuid'

import CapitalDatabase from './databases/capitalDatabase'

export default class CapitalRepository {

  static db = new CapitalDatabase().capitals

  /**
   * Save or update a given capital in the database 
   * @param capital The capital to save
   */
  static save(capital : Capital): Promise<string> {
    if(!capital.uuid){
      capital.uuid = uuid()
    }
    return CapitalRepository.db.put(capital);
  }

  /**
   * Get all the capitals from the database
   */
  static getAll(): Promise<Capital[]> {   
    return CapitalRepository.db.toArray();
  }
}
