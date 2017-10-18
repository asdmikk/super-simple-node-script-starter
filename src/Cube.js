// @flow

import Geometry from './Geometry'

export default class Cube extends Geometry {
    getMass(): number {
        return 42
    }
    getMagicalNumber(): Promise<number> {
       return Promise.resolve(Math.floor(Math.random() * 100))
    }
}