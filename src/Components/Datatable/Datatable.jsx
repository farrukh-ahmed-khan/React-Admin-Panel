import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../Datatablesource';
import { userRows } from '../../Datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
  const [data, setData]=useState(userRows);
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!==id))
  }

  const actionColumn = [
    {
      feild: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="veiwButton">Veiw</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new user
        <Link
          to="/users/new"
          style={{ textDecoration: 'none' }}
          className="link"
        >
          Add new
        </Link>
      </div>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
