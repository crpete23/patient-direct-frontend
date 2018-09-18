import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllEncountersByDate} from '../../actions/encounters'

class EncounterList extends Component {
  componentDidMount() {
    this.props.getAllEncountersByDate('2018/08/30')
  }

  render() {
    console.log(this.props.encounters)

    return (
      <h1>
        theList
      </h1>
    )
  }
}

const mapStateToProps = ({encounters}) => ({encounters})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllEncountersByDate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EncounterList)
