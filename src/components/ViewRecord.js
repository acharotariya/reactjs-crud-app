import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableBody, TableHead, MDBBtn   } from 'mdbreact';

class ViewRecord extends Component {
   constructor(props){
      super(props)
      this.state =  {
         data1: []
      }
   }
   componentDidMount() {
      axios.get('/getItem').then((res)=> {
         console.log('res ===>', res.data)
         this.setState({ data1: res.data })
      }).catch((err)=> {
         console.log(err)
      })
   }
   edititem = item => {
      console.log('item...', item)
      // return <Redirect to='/ediitem'  />
      // this.props.history.push('/edititem', state: { detail: response.data });
      this.props.history.push({
         pathname: '/edititem',
         state: { item: item }
       })
   }  
   
   deleteitem = (item, index) => {
      console.log("index", index)
      let obid = item._id 
      console.log('===', obid)
      axios.delete(`/deleteitem/${obid}`).then((res)=> {
         console.log('res ===>', res)
         this.state.data1.splice(index, 1)
        this.props.history.push({
         pathname: '/viewrecord'
       })
      }).catch((err)=> {
         console.log(err)
      })
   }

   additem = () => {
      this.props.history.push({
         pathname: '/additem'
      })
   }

      render() {
         return (
            <div>
           <MDBBtn color="info" onClick={(e) => {this.additem()}}>Add item</MDBBtn>
           <Table>
             <TableHead color="primary-color" textWhite>
               <tr>
                 <th>#</th>
                 <th>Fruit</th>
                 <th>Price</th>
                 <th>operation</th>
               </tr>
             </TableHead>
           {this.state.data1.map((item, index) => (
              <TableBody>
               <tr key={index}>
                 <td>{index}</td>
                 <td>{item.fruit}</td>
                 <td>{item.price}</td>
                 <td><MDBBtn size="sm" color="primary" onClick={(e) => {this.edititem(item)}}>Edit</MDBBtn>
                 <MDBBtn size="sm" color="danger" onClick={(e) => {this.deleteitem(item, index)}}>Delete</MDBBtn></td>
               </tr>
             </TableBody>
           ))}
           </Table>
           </div>
         );
      }
   }
    
       
export default ViewRecord;

