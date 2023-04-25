
import { Race as RaceInterface } from '../interfaces/race.interface'


export abstract class Race {
    private _raceInterface: RaceInterface;

    constructor(
        raceInterface: RaceInterface,
    ) {
        this._raceInterface = raceInterface;
    }

    get raceInterface() {
        return this._raceInterface;
    }

    get name() {
        return this._raceInterface.name;
    }

    get displayName() {
        return this._raceInterface.displayName;
    }
}