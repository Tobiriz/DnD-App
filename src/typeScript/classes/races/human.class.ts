
import { Race } from './race.class.abstract'

import { Race as RaceInterface } from '../../interfaces/race.interface'


export class Human extends Race {
    constructor (
    ) {
        const raceInterface: RaceInterface = {
            name: 'human',
            displayName: 'Human',
        }
        
        super(raceInterface);
    }
}