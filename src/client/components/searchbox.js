import React from 'react';
import Form from 'muicss/lib/react/form' ;
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

export default class SearchBox extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
      event.preventDefault();
      var searchText = this.input.controlEl.value;
      this.props.onChange(searchText);

  }

  render() {
    return (
      <Form inline={true} onSubmit={this.handleSubmit}>

        <Input label="Search: " placeholder="Enter Search Text"  ref={el => { this.input = el; }}/>
         <Button variant="raised">Search</Button>
         <br/>
      </Form>
    );
  }

}
