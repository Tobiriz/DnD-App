
import { Race } from './race.class.abstract'

import { Race as RaceInterface } from '../../interfaces/race.interface'


export class Barbarian extends Race {
    constructor (
        raceInterface: RaceInterface,
    ) {
        super(raceInterface);
    }
}