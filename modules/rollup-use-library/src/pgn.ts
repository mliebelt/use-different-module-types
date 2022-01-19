import { Chess } from "chess.js"

export function helloChess():string {
    let chess = new Chess()
    chess.move('e4')
    return chess.ascii()
}