import { Stack, YStack } from 'tamagui'
import { InformationBox, Input as StatusInput, Text } from '@status-im/components'
import { ClearIcon, CloseCircleIcon } from '@status-im/icons'
type WithdrawalAddressProps = {
  title: string
}
const WithdrawalAddress = ({ title }: WithdrawalAddressProps) => {
  return (
    <YStack space={'$4'}>
      <Text size={27} weight={'semibold'}>
        {title}
      </Text>
      <YStack space={'$3'}>
        <Text size={13} weight="regular" color={'#647084'}>
          Ethereum Address
        </Text>
        <Stack width={'100%'}>
          <StatusInput
            placeholder={'******************'}
            width={'100%'}
            icon={<ClearIcon size={16} />}
          />
        </Stack>
        <InformationBox
          message="If withdrawal address is not provided at this step, your deposited funds will remain locked on the Beacon Chain until an address is provided. Unlocking will require signing a message with your withdrawal keys, generated from your mnemonic seed phrase (so keep it safe)."
          variant="error"
          icon={<CloseCircleIcon size={20} color="$red" />}
        />
      </YStack>
    </YStack>
  )
}
export default WithdrawalAddress
