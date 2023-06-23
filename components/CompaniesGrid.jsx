import React, { useEffect } from 'react';
import Link from 'next/link';

const GridComponent = ({ items }) => {
  const [numRows, setNumRows] = React.useState(12); // Initial value, adjust as needed
  const [numCols, setNumCols] = React.useState(4); // Initial value, adjust as needed

  useEffect(() => {
    handleResize(); // Initial resize on component mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const container = document.getElementById('gridContainer');
    if (container) {
      const containerHeight = container.clientHeight;
      const containerWidth = container.clientWidth;
      const numRows = Math.floor(containerHeight / 40);
      let numCols = Math.floor(containerWidth / 200);

      if (numCols < 1) {
        numCols = 1; // Ensure at least one column
      } else if (numCols > 4) {
        numCols = 4; // Limit maximum columns to 4
      }

      setNumCols(numCols);
      setNumRows(numRows);
    }
  };

  const containerHeight = `calc(100vh - 8rem)`;

  const columns = Array.from({ length: numCols }, () => []);

  items?.forEach((item, index) => {
    const columnIndex = index % numCols;
    columns[columnIndex]?.push(item);
  });

  return (
    <div
      className="flex border items-start h-full  px-4 py-2"
      id="gridContainer">
      <div
        className={`grid grid-cols-${numCols} gap-4 w-full`}
        style={{ height: containerHeight }}>
        {columns?.map((column, index) => (
          <div key={index} className="flex gap-2 flex-col bg-blue-200">
            {column?.map((item, itemIndex) => (
              <Link href={`/admin/companies/${item.id}`} key={itemIndex}>
                <div
                  key={itemIndex}
                  className="p-1 text-link truncate text-ellipsis">
                  {item.companyName}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
