import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgLoader ={
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack', 
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ]
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            cssLoader, 
            "sass-loader"
        ]
    }

    const babelLoader = buildBabelLoader(options)

    const tsLoader = {
        //ts-loader can work with JSX
        //If we didn`t used TypeScript we would have to use babel-loader
        test: /\.tsx?$/,
        use: 
            [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                        })
                    }
                }
            ],
        exclude: /node_modules/,
    }

    return [
        assetLoader,
        svgLoader,
        scssLoader,
        tsLoader,
        //babelLoader
    ]
}