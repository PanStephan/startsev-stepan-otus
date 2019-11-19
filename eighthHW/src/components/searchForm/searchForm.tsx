import * as React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchForm extends React.Component<any> {

  render() {
    const {onSubmit, onChange, value} = this.props
    
    return (
      <Form
      onSubmit={onSubmit}
      >
        <FormGroup>
          <Label for="citySelector">write a city</Label>
          <Input 
            type="text" 
            id="citySelector"
            placeholder="write a city" 
            value={value}
            onChange={onChange}/>
          <Button outline color="secondary" type="submit">
            Add
          </Button>
        </FormGroup>
      </Form>
    )
  }

}

