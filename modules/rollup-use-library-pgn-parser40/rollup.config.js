import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const config = {
    input: './lib/pgn.js',
    output: {
      file: 'lib/bundle.js',
      format: 'umd',
      name: 'hc',
    },
    plugins: [commonjs(), resolve()],
}

export default config