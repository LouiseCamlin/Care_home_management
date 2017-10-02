import React from 'react'
import RoomItem from './RoomItem.jsx'

class RoomList extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

      const roomItem = this.props.rooms.map((room, index) => {
        return (
          <div>
            <RoomItem key={index} value={index} room={room}
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
