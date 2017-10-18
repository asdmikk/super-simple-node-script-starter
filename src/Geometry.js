// @flow

export default class Geometry {
    getMass(): number {
        throw new Error('getMass not implemented')
    }
    getMagicalNumber(): Promise<number> {
        throw new Error('getMagicalNumber not implemented')
    }
}