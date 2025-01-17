import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import {
  CopyIcon,
  VerifiedIcon,
  ContactIcon,
  CheckIcon,
} from '@status-im/icons'
import { useState } from 'react'

import { copyFunction, getFormattedValidatorAddress } from '../../utilities'

type ValidatorNameAddressProps = {
  name: string
  address: string
  isVerified?: boolean
  isAvatarChipIncluded?: boolean
}

const ValidatorNameAddress = ({
  name,
  address,
  isVerified,
  isAvatarChipIncluded,
}: ValidatorNameAddressProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopyAddress = () => {
    copyFunction(address)

    if (isCopied === false) {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }

  return (
    <YStack alignItems={'flex-start'}>
      <XStack space={'$1'} alignItems="center">
        <Text size={13} weight={'semibold'}>
          Validator {name}
        </Text>
        {isVerified && <VerifiedIcon size={20} />}
        {isAvatarChipIncluded && <ContactIcon size={20} />}
      </XStack>
      <XStack space={'$1'} alignItems="center">
        <Text size={13} color="#647084">
          {getFormattedValidatorAddress(address)}
        </Text>
        {isCopied ? (
          <CheckIcon size={16} color="#647084" />
        ) : (
          <CopyIcon
            size={16}
            color="#647084"
            style={{ cursor: 'pointer' }}
            onClick={onCopyAddress}
          />
        )}
      </XStack>
    </YStack>
  )
}

export default ValidatorNameAddress
