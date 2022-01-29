import * as parser from "@mliebelt/pgn-parser"
import {ParseTree} from "@mliebelt/pgn-parser";
// let pkg = require("@mliebelt/pgn-parser")

export function parsePgn():string {
    let tree = parser.parse("e4 e5", { startRule: "pgn"}) as undefined as ParseTree
    let str = JSON.stringify(tree?.moves[0])
    return str
}