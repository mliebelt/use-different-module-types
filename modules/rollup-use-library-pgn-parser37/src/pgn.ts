import * as parser from "@mliebelt/pgn-parser"
// let pkg = require("@mliebelt/pgn-parser")

export function parsePgn():string {
    let tree = parser.parser.parse("e4 e5", { startRule: "pgn"})
    let str = JSON.stringify(tree[0])
    return str
}