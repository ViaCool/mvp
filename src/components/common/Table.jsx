import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Table({ datam, selectable }) {
  return (
    <div>
      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={600}>
        <table className="w-full">
          <thead className="bg-neutral-700 w-full sticky top-0 z-10">
            <tr>
              {datam.cols.map((value, index) => (
                <th className="text-left py-6 px-10" key={index}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datam.rows.map((row, index) => (
              <tr
                className="hover:bg-opacity-5 duration-150 bg-white hover:bg-primary-blue"
                key={index}
              >
                {row.map((value, index) => (
                  <td className="py-6 px-10" key={index}>
                    <div className="flex gap-5 items-center">
                      {index === 0 && selectable && (
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                      )}
                      <div>{value}</div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
}

export default Table;
