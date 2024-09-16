import { SearchOutlined } from '@ant-design/icons';
import { Input, Form } from 'antd';

interface SearchProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent = ({ searchTerm, onSearchChange }: SearchProps) => {
    const [form] = Form.useForm();

    return (
        <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full">
            <h6 className="font-medium text-base leading-7 text-black mb-5">Search Your Desired Facility</h6>
            <Form form={form} layout="vertical">
                <Form.Item name="searchInput">
                    <Input
                        placeholder="Search..."
                        className="rounded-3xl h-10 text-center"
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                </Form.Item>
                <button
                    type="submit"
                    className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200"
                >
                    <SearchOutlined />
                    Search
                </button>
            </Form>
        </div>
    );
};

export default SearchComponent;
