import webpack from 'webpack';
import path from 'path';
import {IBuildMode, IBuildOptions, IBuildPaths, IBuildPlatform, buildWebpack} from '@packages/build-config';
import packageJson from './package.json';

interface IEnvs {
    mode?: IBuildMode
    port?: number
    analyzer?: boolean
    platform?: IBuildPlatform
}

export default (env: IEnvs) => {
    const paths: IBuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            }
        },
    }))

    return config;
}