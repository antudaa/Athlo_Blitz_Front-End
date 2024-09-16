import { Select } from 'antd';

interface SortProps {
    onSortChange: (value: string) => void;
}

const SortComponent = ({ onSortChange }: SortProps) => {
    return (
        <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full">
            <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                <p className="font-medium text-base leading-7 text-black">Sort Plans</p>
                <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                    RESET
                </p>
            </div>

            <label className="font-medium text-sm leading-6 text-gray-600 mb-1">Sort</label>
            <div className="relative w-full mb-7">
                <Select
                    defaultValue="Sort by Rating / Price (high to low)"
                    style={{
                        height: '40px',
                        width: '100%',
                    }}
                    className="rounded-full"
                    onChange={onSortChange}
                    options={[
                        { value: 'pricePerHour', label: 'Price' },
                        { value: 'rating', label: 'Rating' },
                    ]}
                />
            </div>
        </div>
    );
};

export default SortComponent;
