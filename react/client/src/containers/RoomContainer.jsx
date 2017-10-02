import React from 'react'
import {Link} from 'react-router-dom'
import RoomList from '../components/RoomList.jsx'

class RoomContainer extends React.Component {

  constructor(props){
    super(props)

    this.state ={
      rooms: [],
      occupiedRooms: [],
      roomId: "",
      residentId: "",
      residents: []
    }
  }


  getOccupiedRoomsList() {
    const url ='http://localhost:5000/api/resident_rooms/'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        const occupiedData = JSON.parse(jsonData);
        this.setState({occupiedRooms: occupiedData})
      }
    }
    request.send(null);
  }

  getRoomList() {
    const url ='http://localhost:5000/api/rooms/'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        const roomData = JSON.parse(jsonData);
        this.setState({rooms: roomData, roomId: roomData[0].id})
      }
    }
    request.send(null);
  }

  getResidentList() {
    const url ='http://localhost:5000/api/residents/'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        const residentData = JSON.parse(jsonData);
        this.setState({residents: residentData, residentId: residentData[0].id});
      }
    }
    request.send(null);
  }

  componentDidMount() {
    this.getRoomList();
    this.getResidentList();
    this.getOccupiedRoomsList();
  }

  handleResidentSelect(event){
     const newIndex = event.target.value;
     this.setState({residentId: newIndex})
   }

   handleRoomSelect(event) {
     const newIndex = event.target.value;
     this.setState({roomId: newIndex})
     console.log("room id on select", this.state.roomId);
   }

   submitNewOccupant(event){
     event.preventDefault()
     this.addNewOccupant(this.state.roomId, this.state.residentId)
     console.log("room id at submit", this.state.roomId);
   }

   addNewOccupant(roomId, residentId) {
     const url = 'http://localhost:5000/api/resident_rooms/'
     const newOccupant = {resident_room: {room_id: roomId, resident_id: residentId}}
     const request = new XMLHttpRequest();
     request.open('POST', url);
     request.setRequestHeader("Content-Type", "application/json");
     request.send(JSON.stringify(newOccupant))
   }

   deleteOccupant(id){
     const url = 'http://localhost:5000/api/resident_rooms/' + id
     const request = new XMLHttpRequest();
     request.open('DELETE', url);
     request.onload = () => {
       this.getOccupiedRoomsList()
     }
     request.send()
   }

  render() {
    console.log(this.state);
    console.log("rooms:", this.state.rooms);
    //console.log("occupied rooms:", this.state.occupiedRooms);
    console.log("residents:", this.state.residents);


    const residentOptions = this.state.residents.map((resident, index) => {
      return <option value ={resident.id} key={index}>{resident.name}</option>
    })

    const roomOptions = this.state.rooms.map((room, index) => {
      return <option value={room.id} key={index}>{room.room_number}</option>
    })

    return (
      <div>
        <ul>
          <li><Link to="/Residents">Residents</Link></li>
        </ul>
        <h2>Assign a room to a resident</h2>
        <form id="new-occupant" onSubmit={this.submitNewOccupant.bind(this)}>
          <select id="room-select" name="select_room"
            onChange={this.handleRoomSelect.bind(this)}>
            {roomOptions}
          </select>
          <select id="resident-select" name="select_resident"
            onChange={this.handleResidentSelect.bind(this)}>
            {residentOptions}
          </select>
          <input id="occupant-submit" type="submit" name="submit"
            value="Assign room"/>
        </form>
        <h2>Rooms</h2>
        <RoomList rooms={this.state.rooms} occupiedRooms={this.state.occupiedRooms}
          onDeleteOccupant={this.deleteOccupant.bind(this)}/>
      </div>
    )
  }

}

export default RoomContainer
