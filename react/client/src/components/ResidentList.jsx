import React from 'react'
import ResidentItem from './ResidentItem.jsx'

class ResidentList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newResident: ""
    }
  }

  submitNewResident(event){
    event.preventDefault()
    this.props.onAddResident(this.state.newResident)
  }

  residentKeyUp(event){
    this.setState({
      newResident: event.target.value
    })
  }


  render() {
    const residentItem = this.props.residents.map((resident, index) => {
      return (
        <div>
          <ResidentItem key={index} value={index} resident={resident}
            onDeleteResident={this.props.onDeleteResident}
            onEditResident={this.props.onEditResident}/>
        </div>
      )
    })


    return (

      <div id="resident-list">
        <form onSubmit={this.submitNewResident.bind(this)}>
          <input id="resident-input" type="text" onChange={this.residentKeyUp.bind(this)}
            value={this.state.newPlayer} placeholder="Enter Resident" />
          <input type="submit" name="submit" value="Add New Resident" />
        </form>
        <a>
          {residentItem}
        </a>
      </div>
    );
  }



}

export default ResidentList
