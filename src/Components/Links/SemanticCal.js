import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const friendOptions = [
  {
    key: 'Volumetric Leak Rate Calculator',
    text: 'Volumetric Leak Rate Calculator',
    value: 'Volumetric Leak Rate Calculator',
  },
  {
    key: 'Pump Horsepower',
    text: 'Pump Horsepower',
    value: 'Pump Horsepower',
  },
  {
    key: 'Velocity Pipe',
    text: 'Velocity Pipe',
    value: 'Velocity Pipe',
  },
  {
    key: 'Pump Head to PSI Conversion',
    text: 'Pump Head to PSI Conversion',
    value: 'Pump Head to PSI Conversion',
  },
]
const options = friendOptions.map(({id, value})=>({
  key: id, text: value
}))

const DropdownExampleSelection = () => (
  
  <Dropdown
    placeholder='Select A Chart'
    fluid
    selection
    options={options}  
    renderLabel={({value})=> 1}
    onChange={this.value}
/>
  
)

const value = (event,{value}) => {
  console.log(value);
  
}

export default DropdownExampleSelection