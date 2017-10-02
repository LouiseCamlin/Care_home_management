import React from 'react'
import RoomItem from './RoomItem.jsx'

class RoomList extends React.Component {

  constructor(props) {
    super(props)

  }

  // mapOccupantNodes() {
  //   const occupantNodes = this.props.occupiedRooms.map((occupiedRoom, index) => {
  //     return <button onClick={() => {this.deleteSelectedOccupant(occupiedRoom.id)}}>Delete</button>
  //   })
  //   return occupantNodes
  // }



  render() {

    // const occupantNodes = this.props.occupiedRooms.map((occupiedRoom, index) => {
    //   return <button className="button" onClick={() => {this.deleteSelectedOccupant(this.props.occupiedRoom.id)}}>Delete</button>
    // })


      const roomItem = this.props.rooms.map((room, index) => {
        return (
          <div>
            <RoomItem key={index} value={index} room={room}
              occupiedRooms={this.props.occupiedRooms}

              onDeleteOccupant={this.props.onDeleteOccupant}/>
          </div>
        )
      })


      return (

        <div id="room-list">
          {roomItem}
        </div>
      );
    }

}

export default RoomList
