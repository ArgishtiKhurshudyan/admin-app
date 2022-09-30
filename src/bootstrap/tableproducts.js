import React, {useEffect} from 'react';
import {MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import {useDispatch, useSelector} from "react-redux";
import {getProductStart} from "../redux/product/actions";
import { useNavigate } from 'react-router-dom';


export default function ProductsTable() {
  const {data, isProductGetSuccess} = useSelector(state => state.product)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductStart())
  }, [])

  const handleEdit = (id) => {
    navigate(`/product-detail/${id}`)
  }

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Product Name</th>
          <th scope='col'>Colors</th>
          <th scope='col'>Status</th>

          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data?.map((item) => (
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{width: '45px', height: '45px'}}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{item.productName}</p>
                  <p className='text-muted mb-0'>john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              {item.colors?.map(color => <p className='fw-normal mb-1' style={{color:color.colorName, fontWeight:"700", fontSize:"17px"}}>{color.colorName}</p>)}
            </td>
            <td>
              <MDBBadge color='success' pill>
                Active
              </MDBBadge>
            </td>

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


{/*<tr>*/
}
{/*  <td>*/
}
{/*    <div className='d-flex align-items-center'>*/
}
{/*      <img*/
}
{/*        src='https://mdbootstrap.com/img/new/avatars/6.jpg'*/
}
{/*        alt=''*/
}
{/*        style={{ width: '45px', height: '45px' }}*/
}
{/*        className='rounded-circle'*/
}
{/*      />*/
}
{/*      <div className='ms-3'>*/
}
{/*        <p className='fw-bold mb-1'>Alex Ray</p>*/
}
{/*        <p className='text-muted mb-0'>alex.ray@gmail.com</p>*/
}
{/*      </div>*/
}
{/*    </div>*/
}
{/*  </td>*/
}
{/*  <td>*/
}
{/*    <p className='fw-normal mb-1'>Consultant</p>*/
}
{/*    <p className='text-muted mb-0'>Finance</p>*/
}
{/*  </td>*/
}
{/*  <td>*/
}
{/*    <MDBBadge color='primary' pill>*/
}
{/*      Onboarding*/
}
{/*    </MDBBadge>*/
}
{/*  </td>*/
}
{/*  <td>Junior</td>*/
}
{/*  <td>*/
}
{/*    <MDBBtn color='link' rounded size='sm'>*/
}
{/*      Edit*/
}
{/*    </MDBBtn>*/
}
{/*  </td>*/
}
{/*</tr>*/
}
{/*<tr>*/
}
{/*  <td>*/
}
{/*    <div className='d-flex align-items-center'>*/
}
{/*      <img*/
}
{/*        src='https://mdbootstrap.com/img/new/avatars/7.jpg'*/
}
{/*        alt=''*/
}
{/*        style={{ width: '45px', height: '45px' }}*/
}
{/*        className='rounded-circle'*/
}
{/*      />*/
}
{/*      <div className='ms-3'>*/
}
{/*        <p className='fw-bold mb-1'>Kate Hunington</p>*/
}
{/*        <p className='text-muted mb-0'>kate.hunington@gmail.com</p>*/
}
{/*      </div>*/
}
{/*    </div>*/
}
{/*  </td>*/
}
{/*  <td>*/
}
{/*    <p className='fw-normal mb-1'>Designer</p>*/
}
{/*    <p className='text-muted mb-0'>UI/UX</p>*/
}
{/*  </td>*/
}
{/*  <td>*/
}
{/*    <MDBBadge color='warning' pill>*/
}
{/*      Awaiting*/
}
{/*    </MDBBadge>*/
}
{/*  </td>*/
}
{/*  <td>Senior</td>*/
}
{/*  <td>*/
}
{/*    <MDBBtn color='link' rounded size='sm'>*/
}
{/*      Edit*/
}
{/*    </MDBBtn>*/
}
{/*  </td>*/
}
{/*</tr>*/
}