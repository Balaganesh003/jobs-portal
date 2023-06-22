import Link from 'next/link';
import React, { useEffect } from 'react';

const GridComponent = ({ items }) => {
  const containerHeight = `calc(100vh - 8rem)`;

  const columns = [[], [], [], []];
  items?.forEach((item, index) => {
    const columnIndex = Math?.floor(index / 12); // Determine the column index for the item
    columns[columnIndex]?.push(item);
  });

  return (
    <div className="flex  border items-start max-h-screen px-4 py-2">
      <div
        className="grid grid-cols-4 gap-4 w-full"
        style={{ height: containerHeight }}>
        {columns.map((column, index) => (
          <div key={index} className="flex gap-2 flex-col">
            {column.map((item, itemIndex) => (
              <Link href={`/companies/${item.url}`} key={itemIndex}>
                <div
                  key={itemIndex}
                  className=" p-1  text-link truncate text-ellipsis">
                  {item.label}
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
