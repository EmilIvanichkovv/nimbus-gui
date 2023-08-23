import './LandingPage.css'
import { XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Title from '../../components/General/Title'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import { NodeIcon } from '@status-im/icons'
import { Button as StatusButton, Text } from '@status-im/components'
import QuickStartBar from '../../components/General/QuickStartBar/QuickStartBar'
import { useNavigate } from 'react-router'

const LandingPage = () => {
  const navigate = useNavigate()

  const getStartedHanlder = () => {
    navigate('/pair-device')
  }

  return (
    <>
      <PageWrapperShadow rightImageSrc="./background-images/landing-page-bg.png">
        <YStack className="landing-page">
          <XStack pt={'70px'}>
            <NimbusLogo />
          </XStack>
          <YStack style={{ width: '100%', margin: '30vh 0 4vh' }}>
            <Title color="$textPrimary">
              Light and performant clients, for all Ethereum validators.
            </Title>
            <Text size={15} weight="regular" color="$textPrimary">
              <strong>Nimbus Nodes</strong> allows you to take control and ownership of the services
              you wish to run in a completely trustless and decentralized manner.
            </Text>
          </YStack>

          <XStack>
            <StatusButton icon={<NodeIcon size={20} />} onPress={getStartedHanlder}>
              Get Started
            </StatusButton>
          </XStack>
        </YStack>
      </PageWrapperShadow>
      <QuickStartBar />
    </>
  )
}

export default LandingPage