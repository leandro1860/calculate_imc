import React from 'react';
import {Table} from 'react-bootstrap';

const TableComponent = () => {
  return (
    <div>
      <div className='table'>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th className='table-titles'>IMC</th>
              <th className='table-titles'>Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>menos de 18.5</td>
              <td>Peso insuficiente</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>25 - 26.9</td>
              <td colSpan='2'>Sobrepeso grado I</td>
            </tr>
            <tr>
              <td>27 - 29.9</td>
              <td>Sobrepeso grado II</td>
            </tr>
            <tr>
              <td>30 - 34.9</td>
              <td>Obesidad de tipo I</td>
            </tr>
            <tr>
              <td>35 - 39.9</td>
              <td colSpan='2'>Obesidad de tipo II</td>
            </tr>
            <tr>
              <td>40 - 49.9</td>
              <td>Obesidad de tipo III</td>
            </tr>
            <tr>
              <td>mas de 50</td>
              <td colSpan='2'>Obesidad de tipo IV</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
