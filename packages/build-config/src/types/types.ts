export interface IBuildPaths {
    entry: string
    html: string
    output: string
    src: string
    public: string
}

export type IBuildMode = 'production' | 'development';
export type IBuildPlatform = 'desktop' | 'mobile';

export interface IBuildOptions {
    port: number
    paths: IBuildPaths
    mode: IBuildMode
    analyzer?: boolean
    platform: IBuildPlatform
}