import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { List } from 'semantic-ui-react'
import {getAllEncountersByDate} from '../../actions/encounters'
import Encounter from './Encounter'

class EncounterList extends Component {
  componentDidMount() {
    this.props.getAllEncountersByDate(this.props.date)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.date !== nextProps.date){
      this.props.getAllEncountersByDate(nextProps.date)
    }
  }

  render() {
    let encountersList = this.props.encounters.encounters.sort(function(a,b){
      return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time)})
      .map(encounter => <Encounter key={encounter.id} {...encounter} />)

    return (
      <List celled>
        {encountersList}
      </List>
    )
  }
}

const mapStateToProps = ({encounters}) => ({encounters})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllEncountersByDate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EncounterList)
