import * as React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {useState} from 'react'
import {connect} from 'react-redux'
import {weatherReq, weatherLoaded} from '../../../../actions'
import {weatherInfo} from '../../../../services/getInfo'

interface PropInput {
  inputValue: string;
}

interface PropSearchForm {
  weather: Promise<object>;
  weatherReq(res: any): any;
  weatherLoaded(): void;
}

const addToLocalStorage = (name) => {
  if (localStorage) {
    let city
    if (!localStorage['city']) city = []
    else city = JSON.parse(localStorage['city'])
    if (!(city instanceof Array)) city = []
    city.push(name)
    localStorage.setItem('city', JSON.stringify(city))
  } 
}

const SearchForm: React.FC<PropSearchForm> = (props) => {

  const{weatherReq, weatherLoaded} = props

  const[inputValue, setInput] = useState<PropInput | ''>('')

  const onSubmit = async (e) => {
    e.preventDefault()
    await weatherInfo(inputValue)
      .then(res => {
        weatherReq(res)
        addToLocalStorage(res.location.name)
        weatherLoaded()
      })
      .catch(err => console.log(err))
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