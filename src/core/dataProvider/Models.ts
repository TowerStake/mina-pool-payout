import { Blocks, Stake } from './dataprovider-types';

export interface IDataProviderFactory<T> {
    build(dataSource: string): T;
}

export interface IBlockDataProvider {
    getLatestHeight(): Promise<number>;
    getBlocks(key: string, minHeight: number, maxHeight: number): Promise<Blocks>;
    getMinMaxBlocksByEpoch(epoch: number): Promise<{ min: number; max: number }>;
}

export interface IStakeDataProvider {
    getStakes(ledgerHash: string, key: string): Promise<[Stake[], number]>;
}
