'use client'
import { Select, Option } from '@material-tailwind/react'

const Dropdown = ({ title = 'select', setValue = () => {}, options=[]} ) => {
  return (
    <div className=''>
      <Select
        color='teal'
        label={`${title}`}
        onChange={(val) => setValue(val)}
      >
        {options.map((d, i) => (
          <Option value={d.name} key={i}>
            {d.name}
          </Option>
        ))}
      </Select>
    </div>
  )
}

export default Dropdown
