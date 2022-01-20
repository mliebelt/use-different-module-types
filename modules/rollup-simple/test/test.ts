import * as should from "should"
import {describe} from "mocha"
import { helloChess } from "../lib/bundle"

describe("When using self-built library", function() {
    it("should  be able to call function", function() {
        let text = helloChess();
        should.exist(text)
        should(text).equal("Hello chess!")
    })
})