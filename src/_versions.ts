export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.0.0',
    name: 'opentakserver-ui',
    versionDate: '2026-09-08T21:11:16.082Z',
    gitCommitHash: 'cad34a9',
    versionLong: '0.0.0-cad34a9',
};
export default versions;
