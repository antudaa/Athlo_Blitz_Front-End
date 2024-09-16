import React, { useRef, useState } from "react";
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Spin, Table } from 'antd';
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { IFacility } from "../../../types/Facility/facility.type";
import { useGetAllFacilitiesQuery } from "../../../redux/features/facility/facilityApi";
import PaginationComponent from "../Pagination/Pagination";
import DeleteFacilityButton from "../button/DeleteFacilityButton";
import EditFacilityButton from "../button/EditFacilityButton";
import AddFacilityButton from "../button/AddFacilityButton";

type DataIndex = keyof IFacility;

const AllFacilityTable: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState<DataIndex | ''>('');
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const searchInput = useRef<InputRef>(null);

    // Fetch all facilities
    const { data: facilitiesData, isLoading: facilitiesLoading } = useGetAllFacilitiesQuery({ searchTerm: "", sort: "", pricePerHour: "", page, limit });

    const totalFacilities = facilitiesData?.data?.total || 0;
    const facilities: IFacility[] = facilitiesData?.data?.data?.filter((facility: IFacility) => !facility?.isDeleted) || [];

    const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps['confirm'], dataIndex: DataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<IFacility> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]?.toString().toLowerCase().includes((value as string).toLowerCase()),
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    // Custom pagination handler
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    // Table columns configuration
    const columns: TableColumnsType<IFacility> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            ...getColumnSearchProps('location'),
        },
        {
            title: 'Price Per Hour',
            dataIndex: 'pricePerHour',
            key: 'pricePerHour',
            render: (pricePerHour) => `$${pricePerHour.toFixed(2)}`,
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, facility) => (
                <Space size="middle">
                    <EditFacilityButton record={facility} />
                    <DeleteFacilityButton record={facility} />
                </Space>
            ),
        },
    ];

    // Loading spinner while fetching facilities
    if (facilitiesLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-end mb-4">
                <AddFacilityButton />
            </div>
            <Table
                className="shadow-xl"
                columns={columns}
                dataSource={facilities}
                pagination={false}
                scroll={{ x: 'max-content' }} // Enable horizontal scrolling
                rowKey={(record) => record._id}
            />
            <div className="flex justify-end mt-8">
                <PaginationComponent
                    current={page}
                    total={totalFacilities}
                    pageSize={limit}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default AllFacilityTable;
