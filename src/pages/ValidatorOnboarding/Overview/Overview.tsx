import { XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import OverviewCard from './OverviewCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'

const Overview = () => {
  return (
    <>
      <YStack
        className="layout-left"
        space={'$5'}
        style={{ padding: '26px 0 32px 32px' }}
        minHeight={'65vh'}
        justifyContent={'space-between'}
      >
        <YStack space={'$5'}>
          <Text size={27} weight={'semibold'}>
            Overview
          </Text>
          <Text size={19}>
            Becoming a validator is a big responsibility with important preparation steps. Only
            start the deposit process when you're ready.
          </Text>
          <Text size={15} color="#939BA1">
            By running a validator, you'll be responsible for securing the network and receive
            continuous payouts for actions that help the network reach consensus.
          </Text>
          <Text size={15} color="#939BA1">
            Since the successful transition to proof-of-stake via The Merge, Ethereum is fully
            secured by proof-of-stake validators. By running a validator, you'll be helping to
            secure the Ethereum network.
          </Text>
          <LinkWithArrow
            text="Learn More"
            to={'/'}
            arrowRight={true}
            style={{ marginBottom: '1%', fontSize: '13px' }}
          />
        </YStack>
        <XStack space={'$3'}>
          <OverviewCard text={'Current APR'} value={'4.40%'} />
          <OverviewCard text={'Total ETH Staked'} value={'9,451,123'} />
          <OverviewCard text={'Estimated Activation Time'} value={'32 Days'} />
          <OverviewCard text={'Validator Queue'} value={'92603'} />
        </XStack>
      </YStack>
      <section className="layout-right">
        <div className="image-container">
          <img
            src="./background-images/sync-status-background.png"
            alt="background"
            className="background-img"
          />
        </div>
      </section>
    </>
  )
}

export default Overview