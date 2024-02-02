import * as path from "path";
import TerserPlugin from "terser-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import webpack from "webpack";
import { fileURLToPath } from "url";
import { VueLoaderPlugin } from "vue-loader";
import StyleLintPlugin from "stylelint-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const buildPaths = {
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "main.js"),
    html: path.resolve(__dirname, "/", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  return {
    mode: env.mode ?? "development",
    entry: buildPaths.entry,
    output: {
      path: buildPaths.output,
      filename: "js/bundle.[contenthash].js",
      clean: true,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: buildPaths.html,
        favicon: path.resolve(buildPaths.public, "favicon.svg"),
        inject: "body",
      }),
      new VueLoaderPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
      isDev && new webpack.ProgressPlugin(),
      isProd &&
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(buildPaths.public),
              to: buildPaths.output,
            },
          ],
        }),
      new StyleLintPlugin({
        files: [path.resolve(__dirname, "src/**/*.{vue,scss}")],
      }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            "vue-loader",
            // 'eslint-loader'
          ],
        },
        {
          test: /\.scss$/,
          use: [
            isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.svg$/,
          use: [
            // 'babel-loader',
            "vue-svg-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: false,
          historyApiFallback: true,
        }
      : undefined,
    resolve: {
      extensions: ["*", ".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@icons": path.resolve(__dirname, "./src/icons"),
        "@public": path.resolve(__dirname, "./public"),
      },
    },
  };
};
