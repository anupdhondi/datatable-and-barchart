import React, { useCallback } from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponent = ({ data, columns, handleRowSelect }) => {
  const isSelected = useCallback((row) => row.isSelected, []);
  return (
    <div>
      <DataTable
        title="Security risk"
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelect}
        selectableRowSelected={isSelected}
      />
    </div>
  );
};

export default DataTableComponent;
