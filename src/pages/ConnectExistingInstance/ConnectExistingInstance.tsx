import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Text } from '@status-im/components'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'

import Titles from '../../components/General/Titles'

import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'

import { NodeIcon, SettingsIcon, CompleteIdIcon } from '@status-im/icons'
import Header from '../../components/General/Header'
import Icon from '../../components/General/Icon'
import PairedSuccessfully from '../PairDevice/PairedSuccessfully'

const ConnectExistingInstance = () => {
    const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)
    const isPaired = false
    const isPairing = false

    const changeSetIsAwaitingPairing = (result: boolean) => {
        setIsAwaitingPairing(result)
    }

    return (
        <PageWrapperShadow rightImageSrc="./background-images/day-night-bg.png" rightImageLogo={true}>
            <YStack
                space={'$3'}
                style={{
                    maxWidth: '100%',
                }}
            >
                <Header selectedTag="pair" />
                <Titles title="Connect to existing Nimbus Instance" subtitle="Pair your existing device to the Nimbus Node Manager " />
                <XStack style={{ justifyContent: 'space-between' }}>
                    <Text size={19} weight={'semibold'} color="#09101C">
                        Connect via IP
                    </Text>
                    <Button
                        variant="grey"
                        size={24}
                        icon={<SettingsIcon size={20} />}

                    >
                        Advanced
                    </Button>
                </XStack>
                {/* {isPaired ? <PairedSuccessfully /> : <GenerateId isAwaitingPairing={isAwaitingPairing} />} */}
                {/* {!isPaired && (
          <SyncStatus
            isPairing={isPairing}
            isAwaitingPairing={isAwaitingPairing}
            changeSetIsAwaitingPairing={changeSetIsAwaitingPairing}
          />
        )} */}
                <Separator borderColor={'#e3e3e3'} />
                <Text size={19} weight={'semibold'} color="#09101C">
                    Advanced Settings
                </Text>
                <XStack space={'$4'}>
                    <Button icon={<CompleteIdIcon size={20} color="#2A4AF5" />} variant='outline'  >Pair with ID </Button>
                </XStack>
                {isPaired && <CreateAvatar />}
                <Separator borderColor={'#e3e3e3'} />
                <XStack>
                    <Button icon={<NodeIcon size={20} />} disabled={!isPaired}>
                        Continue
                    </Button>
                </XStack>
            </YStack>
        </PageWrapperShadow>
    )
}

export default ConnectExistingInstance
