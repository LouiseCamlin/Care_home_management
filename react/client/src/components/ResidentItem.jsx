import React from 'react'


class ResidentItem extends React.Component {

  constructor(props){
    super(props)
  }

  deleteSelectedResident(event){
    this.props.onDeleteResident(this.props.resident.id)
  }



  render() {


    return(
      <div id="room-list">
        <p>Name: {this.props.resident.name}</p>
          <button className="button"
            onClick={() => {this.deleteSelectedResident(this.props.resident.id)}}>Delete</button>
      </div>
    )
  }


}

export default ResidentItem
