import { Avatar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import { getFormattedWalletAddress } from '../../../utilities'
import { useConnectWallet } from '@web3-onboard/react'

const ConnectedWallet = () => {
  const [{ wallet }] = useConnectWallet()
  const address = wallet?.accounts[0].address || ''
  const balance = Number(wallet?.accounts[0].balance) || 0

  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
      <XStack space={'$2'}>
        <Avatar
          type="icon"
          size={32}
          icon={
            <img src={'/icons/connected-wallet-eth-logo.svg'} alt="connected-wallet-eth-logo" />
          }
        />
        <YStack>
          <Text size={15} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <Text size={13} weight={'semibold'}>
            {getFormattedWalletAddress(address)}
          </Text>
          <Stack style={{ marginTop: '3px' }}>
            <Text size={13} color="#2A4CF4" weight={'semiboldF'}>
              Connected
            </Text>
          </Stack>
        </YStack>
      </XStack>
      <YStack>
        <Text size={15} weight={'semibold'}>
          Balance
        </Text>
        <Text size={27} weight={'semibold'}>
          {balance} ETH
        </Text>
      </YStack>
    </XStack>
  )
}

export default ConnectedWallet
