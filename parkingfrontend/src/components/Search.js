import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Search = () => {
  const data = {
    columns: [
      {
        label: 'Slot Type',
        field: 'name',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Slot Number',
        field: 'position',
        sort: 'asc',
        width: 20
      },
      {
        label: 'Status',
        field: 'office',
        sort: 'asc',
        width: 50
      },
    ],
    rows: [
      {
        name: 'First Floor Parking',
        position: '01',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '02',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '03',
        office: 'Booked',
      },
      {
        name: 'First Floor Parking',
        position: '04',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '05',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '06',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '07',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '08',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '09',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '10',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '11',
        office: 'Available',
      },
      {
        name: 'First Floor Parking',
        position: '12',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '01',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '02',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '03',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '04',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '05',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '06',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '07',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '08',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '09',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '10',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '11',
        office: 'Available',
      },
      {
        name: 'Second Floor Parking',
        position: '12',
        office: 'Available',
      },
      {
        name: 'Outer Parking',
        position: '01',
        office: 'Available',
      },
      {
        name: 'Outer Parking',
        position: '02',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '03',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '04',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '05',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '06',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '07',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '08',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '09',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '10',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '11',
        office: 'Available',
      },
      {
        name: 'Outer  Parking',
        position: '12',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '01',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '02',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '03',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '04',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '05',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '06',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '07',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '08',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '09',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '10',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '11',
        office: 'Available',
      },
      {
        name: 'Basement Parking',
        position: '12',
        office: 'Available',
      },
    ]
  };

  return (
    <div className="container">
    <MDBDataTable
    striped
    bordered
    medium="true"
    responsive
    data={data}
    order={['name', 'asc' ]}
  />
  <style jsx global>{`
      @import "../styles/bootstrap-custom/jsx-import";
      .table thead:last-child{
        display:none;
      }
    `}</style>
    </div>
  );
}

export default Search;