import webpack from "webpack";

// export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: webpack.Configuration["mode"];
  port: number;
}

export interface BuildOptions {
  mode: webpack.Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
