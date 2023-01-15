import * as React from 'react'
import { ethers } from 'ethers'
import {
    useAccount,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi'

import styles from '../index.module.css';

export function MintNFT() {
    const { address } = useAccount()
    const { config, error: prepareError, isError: isPrepareError } = usePrepareContractWrite({
        address: '0xA0825BE23abb4c817Fe83E6202718ee227C772b8',
        abi: [
            {
                name: 'mint',
                type: 'function',
                stateMutability: 'payable',
                inputs: [],
                outputs: [],
            },
        ],
        functionName: 'mint',
        overrides: {
            from: address,
            value: ethers.utils.parseEther('0.1'),
            gasLimit: ethers.BigNumber.from(600000),
          },
    })
    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <div className={styles.c}>
            <button className={styles.bigblue} disabled={!write || isLoading} onClick={() => write === undefined ? undefined : write() }>
                {isLoading ? 'Minting...' : 'Mint'}
            </button>
            {isSuccess && (
                <div>
                    Successfully minted your NFT!
                    <div>
                        <a href={`https://snowtrace.io/tx/${data?.hash}`}>Snowtrace</a>
                    </div>
                </div>
            )}
            {(isPrepareError || isError) && (<div>Error: {(prepareError || error)?.message}</div>)}
        </div>
    )
}
