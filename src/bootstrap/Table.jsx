import Table from 'react-bootstrap/Table';

function TableProfile() {
  return (
<>
  <h3 style={{color:"#7451f8"}}>Basic information</h3>
  <Table striped="columns" style={{width:"500px"}}>
    <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Alexandr</td>
      <td>Xachatryan</td>
      <td>xachatryna@gmail.com</td>
    </tr>
    </tbody>
  </Table>
  <Table striped="columns" style={{width:"500px"}}>
    <thead>
    <tr>
      <th>#</th>
      <th>Country</th>
      <th>City</th>
      <th>Address</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Armenia</td>
      <td>Yerevan</td>
      <td>kentron</td>
    </tr>
    </tbody>
  </Table>
</>
  );
}

export default TableProfile;