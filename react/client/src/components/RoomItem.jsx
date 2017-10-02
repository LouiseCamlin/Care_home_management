import React from 'react'

class RoomItem extends React.Component {
  constructor(props){
    super(props)
  }

  deleteSelectedOccupant(event){
    const occupiedRoomId = this.props.occupiedRooms.map((occupiedRoom, index) => {
       return occupiedRoom.id
     });
    this.props.onDeleteOccupant(occupiedRoomId)
  }



  mapRoomNodes() {
    const roomNodes = this.props.room.resident_room.map((resident_room, index) => {
      return <ul key={index}>
        <li>Resident: {resident_room.resident.name}
          <button onClick={() => {this.deleteSelectedOccupant(resident_room.id)}}>Delete</button>
        {/* <div>{occupantNodes}</div> */}
      </li>
      </ul>
    });
    return roomNodes
    //console.log(occupiedRoom.id);
  }

  // mapOccupantNodes() {
  //   const occupantNodes = this.props.occupiedRooms.map((occupiedRoom, index) => {
  //     return <button onClick={() => {this.deleteSelectedOccupant(occupiedRoom.id)}}>Delete</button>
  //   })
  //   return occupantNodes
  // }



  render(){
    //console.log("occupant id:", this.props.room.resident_room[0].id);

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
