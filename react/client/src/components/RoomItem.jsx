import React from 'react'

class RoomItem extends React.Component {
  constructor(props){
    super(props)
  }

  deleteSelectedOccupant(event){
    const occupiedRoomId = this.props.room.resident_room.map((resident_room, index) => {
      return resident_room.id
    })
    this.props.onDeleteOccupant(occupiedRoomId)
  }


  mapRoomNodes() {
    const roomNodes = this.props.room.resident_room.map((resident_room, index) => {
      return <ul key={index}>
        <li>Resident: {resident_room.resident.name}
          <button onClick={() => {this.deleteSelectedOccupant(resident_room.id)}}>Remove Resident</button>
        </li>
      </ul>
    });
    return roomNodes
  }


  render(){

    const roomNodes = this.mapRoomNodes()

    return(
      <div id="room-list">
        <p>Room Number: {this.props.room.room_number}, Beds: {this.props.room.beds}</p>
        <div>
          {roomNodes}
        </div>
      </div>
    )
  }


}

export default RoomItem
