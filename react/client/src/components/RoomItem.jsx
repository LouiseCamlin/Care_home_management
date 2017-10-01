import React from 'react'

class RoomItem extends React.Component {
  constructor(props){
    super(props)
  }

  deleteSelectedOccupant(event){
    this.props.onDeleteOccupant(this.props.occupiedRoom.id)
  }



  mapRoomNodes() {
    const roomNodes = this.props.room.resident_room.map((resident_room, index) => {
      return <ul key={index}>
        <li>Resident: {resident_room.resident.name}</li>
      </ul>

    })
    return roomNodes
  }



  render(){
    console.log("occupant id:", this.props.room.resident_room.id);

    //const occupantNodes = this.mapOccupantNodes()


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
