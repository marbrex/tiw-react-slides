import HtmlWebPackPlugin from 'html-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: 'index.html'
})

const esLintPlugin = new ESLintPlugin({
  extensions: ['js', 'jsx', 'ts', 'tsx']
})

export default (env, argv) => {
  console.log(argv.mode)
  return {
    entry: './src/client/index.tsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [htmlPlugin, esLintPlugin],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: { name: '/static/[name].[ext]' }
        }
      ]
    }
  }
}
