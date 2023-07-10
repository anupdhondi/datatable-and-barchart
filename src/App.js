import React, { useCallback, useState } from 'react';
import DataTable from './DataTable';
import Chart from './Chart';

const columns = [
  {
    name: 'ID',
    selector: (row) => row.id,
  },
  {
    name: 'Risk type',
    selector: (row) => row.name,
  },
  {
    name: 'Score',
    selector: (row) => row.percentage,
  },
];

const data = [
  {
    id: 1,
    name: 'Service insight integration',
    percentage: '50',
    isSelected: true,
  },
  {
    id: 2,
    name: 'REI-GI/gi frontend (active)',
    percentage: '90',
    isSelected: true,
  },
  {
    id: 3,
    name: 'Service insight Jarvis',
    percentage: '30',
    isSelected: true,
  },
  {
    id: 4,
    name: 'CbrePaulRodemayer/webdev',
    percentage: '70',
    isSelected: true,
  },
  {
    id: 5,
    name: 'AGILEFAST/agile-market-analysis',
    percentage: '60',
    isSelected: true,
  },
];

const App = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = useCallback((selectedItems) => {
    setSelectedRows(selectedItems.selectedRows);
  }, []);

  return (
    <>
      <div>
        <DataTable
          columns={columns}
          data={data}
          handleRowSelect={handleRowSelect}
        />
      </div>
      <div>
        <Chart data={selectedRows} />
      </div>
    </>
  );
};

export default App;
