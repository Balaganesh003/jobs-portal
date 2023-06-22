import React, { useEffect } from 'react';
import Link from 'next/link';

const GridComponent = ({ items }) => {
  const [numRows, setNumRows] = React.useState(12); // Initial value, adjust as needed

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const container = document.getElementById('gridContainer');
    if (container) {
      const containerHeight = container.clientHeight;
      const numRows = Math.floor(containerHeight / 40); // Adjust the height per row as needed
      console.log('numRows', numRows);
      setNumRows(numRows);
    }
  };

  const containerHeight = `calc(100vh - 8rem)`;

  const columns = [[], [], [], []];
  items?.forEach((item, index) => {
    const columnIndex = Math.floor(index / numRows);
    columns[columnIndex]?.push(item);
  });

  return (
    <div
      className="flex border items-start max-h-screen px-4 py-2"
      id="gridContainer">
      <div
        className="grid grid-cols-4 gap-4 w-full"
        style={{ height: containerHeight }}>
        {columns?.map((column, index) => (
          <div key={index} className="flex gap-2 flex-col">
            {column?.map((item, itemIndex) => (
              <Link href={`${item.companyName}`} key={itemIndex}>
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
