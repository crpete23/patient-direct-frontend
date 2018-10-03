import React from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
var moment = require('moment')

class DateFormInline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format(`YYYY/MM/DD`)
    };
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
      this.props.changedDate(value)
    }
  }

  render() {
    return (
      <Form className="calendarContainer">
        <DateInput
          inline
          name="date"
          placeholder="Date"
          value={this.state.date}
          dateFormat = {`YYYY/MM/DD`}
          iconPosition="left"
          onChange={this.handleChange} />
      </Form>
    );
  }
}

export default DateFormInline;
