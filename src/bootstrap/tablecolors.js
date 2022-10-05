import React, {useEffect} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {getColorStart} from "../redux/color/actions";


export default function ColorsTable() {
  const {colorData} = useSelector(state => state.color)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getColorStart())
  }, [dispatch])

  const handleEdit = (id) => {
    navigate(`/color-detail/${id}`)
  }

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' style={{color:"white"}}>Color Name</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {colorData?.map((item) => (
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{width: '45px', height: '45px'}}
                  className='rounded-circle'
                />
                <div className='ms-3' style={{backgroundColor:item.colorName}}>
                  <p className='fw-bold mb-1'>{item.colorName}</p>
                </div>
              </div>
            </td>
            {/*<td>*/}
            {/*  {item.colors?.map(color => <p className='fw-normal mb-1' style={{*/}
            {/*    color: color.colorName,*/}
            {/*    fontWeight: "700",*/}
            {/*    fontSize: "17px"*/}
            {/*  }}>{color.colorName}</p>)}*/}
            {/*</td>*/}
            {/*<td>*/}
            {/*  <MDBBadge color='success' pill>*/}
            {/*    Active*/}
            {/*  </MDBBadge>*/}
            {/*</td>*/}

            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => handleEdit(item.id)}>
                Edit
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
