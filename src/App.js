import logo from './logo.svg';
import { ReactTable  } from 'react-table'
import './App.css';
import { useQuery, gql } from '@apollo/client';
import React from 'react';


const CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        name,
        species,
        gender,
        id
      }
    }
  }
`;



function TableExample() {
  

  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // debugger

  const datos = data.characters.results;

  const columns = [
    {
      Header: '#',
      accessor: 'id', // accessor is the "key" in the data
    },
    {
      Header: 'Nombre',
      accessor: 'name',
    },
    {
      Header: 'Especie',
      accessor: 'species', // accessor is the "key" in the data
    },
    {
      Header: 'Género',
      accessor: 'gender',
    }
    
  ]
  
  return (
    <div>

      <ReactTable
      loading = {loading}
      data = {datos}
      columns = {columns}
      />
    </div>
  )
  

  
}

// function ExampleTable () {
  
  


  
  

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data })

//   return (
//     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   borderBottom: 'solid 3px red',
//                   background: 'aliceblue',
//                   color: 'black',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row)
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{
//                       padding: '10px',
//                       border: 'solid 1px gray',
//                       background: 'papayawhip',
//                     }}
//                   >
//                     {cell.render('Cell')}
//                   </td>
//                 )
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )

  
// }




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TableExample/>
        
      </header>
      
    </div>
  );
}

export default App;
