// flow-typed signature: 99ae8d4f92bde0d96e50cc0c401f5d0f
// flow-typed version: d560506241/cpy_v5.x.x/flow_>=v0.36.x

declare module 'cpy' {
  declare module.exports: (
    files: string | Array<string>,
    destination: string,
    options?: {
      cwd?: string,
      parents?: boolean,
      rename?: string | (basename: string) => string,
      // additional cp-file options
      overwrite?: boolean,
      // additional node-glob options
      root?: string,
      dot?: boolean,
      nomount?: string,
      mark?: boolean,
      nosort?: boolean,
      stat?: boolean,
      silent?: boolean,
      strict?: boolean,
      cache?: Object,
      statCache?: Object,
      symlinks?: Object,
      nounique?: boolean,
      nonull?: boolean,
      debug?: boolean,
      nobrace?: boolean,
      noglobstar?: boolean,
      noext?: boolean,
      nocase?: boolean,
      matchBase?: boolean,
      nodir?: boolean,
      ignore?: string | Array<string>,
      follow?: boolean,
      realpath?: boolean,
      absolute?: boolean,
    },
  ) => Promise<void>;
}
