import { Checkbox, Text } from '@status-im/components'

type ManagementTableHeaderProps = {
  validatorsAmount: number
}

const ManagementTableHeader = ({ validatorsAmount }: ManagementTableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox id="table" variant="outline" />
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            {validatorsAmount} Validators
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Balance
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Income
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Proposals
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Attestations
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Effectiveness
          </Text>
        </th>
        <th>
          <Text size={15} color={'#647084'}>
            Status
          </Text>
        </th>
        <th></th>
      </tr>
    </thead>
  )
}

export default ManagementTableHeader
