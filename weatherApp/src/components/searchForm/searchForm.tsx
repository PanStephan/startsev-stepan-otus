import * as React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {useState} from 'react'
import {connect} from 'react-redux'
import {weatherReq, weatherLoaded} from '../../actions'
import {weatherInfo} from '../../services/getInfo'

interface IPropInput {
  inputValue: string,
}

interface IPropSearchForm {
  weather: Promise<object>
  weatherReq(props: any): any
  weatherLoaded()
}

const SearchForm: React.FC<IPropSearchForm> = (props) => {

  const{weatherReq, weatherLoaded} = props

  const[inputValue, setInput] = useState<IPropInput | ''>('')

  const onSubmit = async (e) => {
    e.preventDefault()
    await weatherInfo(inputValue)
      .then(res => {
        weatherReq(res)
        weatherLoaded()
      })
    setInput('')
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  let disabled = inputValue === ''

  return (
    <Form
    onSubmit={onSubmit}>
      <FormGroup>
        <Label for="citySelector">write a city</Label>
        <Input 
          type="text" 
          id="citySelector"
          placeholder="write a city" 
          onChange={onChange}      
          value={inputValue}
          /> 
        <Button disabled={disabled} outline color="secondary" type="submit">
          Add
        </Button>
      </FormGroup>
    </Form>
  )
}

const mapDispatchToProps = {
  weatherReq,
  weatherLoaded
}

export default connect(null, mapDispatchToProps)(SearchForm)