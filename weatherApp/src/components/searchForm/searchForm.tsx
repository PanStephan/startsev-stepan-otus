import * as React from 'react'
import {getWeather} from '../../actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {useState} from 'react'
import {connect} from 'react-redux'

interface IPropInput {
  inputValue: string,
}

interface IPropSearchForm {
  weather: Promise<object>
  getWeather(props: any): any
}

const SearchForm: React.FC<IPropSearchForm> = (props) => {

  const{getWeather} = props

  const[inputValue, setInput] = useState<IPropInput | ''>('')

  const onSubmit = (e) => {
    e.preventDefault()
    getWeather(inputValue)
    setInput('')
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  let disabled
  inputValue === '' ? disabled = true : disabled = false

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
  getWeather
}

export default connect(null, mapDispatchToProps)(SearchForm)