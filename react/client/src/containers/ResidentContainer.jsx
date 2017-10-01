import React from 'react'
import {Link} from 'react-router-dom'
import ResidentList from '../components/ResidentList.jsx'

class ResidentContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      residents: [],
      residentKeyUp: null
    }
  }

  getResidentList() {
    const url ='http://localhost:5000/api/residents/'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        const residentData = JSON.parse(jsonData);
        this.setState({residents: residentData})
      }
    }
    request.send(null);
  }

  componentDidMount() {
    this.getResidentList();
  }


  addResident(newResidentName){
    const url ='http://localhost:5000/api/residents/'
    const newResident = {resident: {name: newResidentName}}
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      this.getResidentList()
    }
    request.send(JSON.stringify(newResident))
  }

  // editResident(id, newResidentName){
  //   const url = 'http://localhost:5000/api/residents/' + id
  //   const updatedResident = {resident: {name: newResidentName}}
  //   const jsonString = JSON.stringify(updatedResident)
  //   const request = new XMLHttpRequest();
  //   request.open('PUT', url)
  //   request.setRequestHeader("Content-Type", "application/json")
  //   request.onload = () => {
  //     this.getResidentList()
  //   }
  //   request.send(jsonString)
  // }


  deleteResident(id){
    const url = 'http://localhost:5000/api/residents/' + id
    const request = new XMLHttpRequest();
    request.open('DELETE', url);
    request.onload = () => {
      this.getResidentList()
    }
    request.send()
  }

  render(){
    console.log("residents:", this.state.residents);

    return (
      <div>
        <ul>
          <li><Link to="/rooms">Rooms</Link></li>
        </ul>
        <h2>Residents</h2>
        <ResidentList residents={this.state.residents}
          onDeleteResident={this.deleteResident.bind(this)}
          //onEditResident={this.editResident.bind(this)}
          onAddResident={this.addResident.bind(this)}
          residentKeyUp={this.state.residentKeyUp}/>

      </div>
    )
  }

}

export default ResidentContainer
