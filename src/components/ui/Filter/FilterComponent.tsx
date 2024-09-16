import { Select } from 'antd';

interface FilterProps {
  onFilterChange: (value: string) => void;
}

const FilterComponent = ({ onFilterChange }: FilterProps) => {
  return (
    <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full">
      <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
        <p className="font-medium text-base leading-7 text-black">Filter Plans</p>
        <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
          RESET
        </p>
      </div>

      <label className="font-medium text-sm leading-6 text-gray-600 mb-1">Filter</label>
      <div className="relative w-full mb-7">
        <Select
          defaultValue="Filter by price (high to low)"
          style={{
            height: '40px',
            width: '100%',
          }}
          className="rounded-full"
          onChange={onFilterChange}
          options={[
            { value: 50, label: 'Below 50' },
            { value: 100, label: 'Below 100' },
            { value: 200, label: 'Below 200' },
            { value: 300, label: 'Below 300' },
            { value: 400, label: 'Below 400' },
            { value: 500, label: 'Below 500' },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
