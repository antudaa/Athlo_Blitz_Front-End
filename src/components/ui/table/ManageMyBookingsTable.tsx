import React, { useRef, useState } from "react";
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Spin, Table } from 'antd';
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import PaginationComponent from "../Pagination/Pagination";
import { TBooking } from "../../../types/Booking/bookingType";
import { useGetBookingsByUserQuery } from "../../../redux/features/booking/bookingApi";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import CancelBookingButton from "../button/CancelBookingButton";
import { Link } from "react-router-dom";

type DataIndex = keyof TBooking | 'facility.name';

const ManageMyBookingsTable: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState<DataIndex | ''>('');
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const searchInput = useRef<InputRef>(null);
    const token = useSelector(useCurrentToken);

    // Query to fetch bookings, with pagination parameters
    const { data: Bookings, isLoading: bookingIsLoading } = useGetBookingsByUserQuery({
        token,
        page,
        limit,
    });

    // Total bookings from API
    const totalBookings = Bookings?.data?.total || 0;

    // Filter out deleted bookings
    const bookings: TBooking[] = Bookings?.data?.data?.filter(
        (booking: TBooking) => !booking?.isDeleted
    ) || [];

    // Search handling
    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<TBooking> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            dataIndex === 'facility.name'
                ? record.facility?.name
                    ?.toString()
                    .toLowerCase()
                    .includes((value as string).toLowerCase())
                : record[dataIndex]
                    ?.toString()
                    .toLowerCase()
                    .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
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

    // Handle pagination change
    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    // Table columns configuration
    const columns: TableColumnsType<TBooking> = [
        {
            title: 'Facility',
            dataIndex: ['facility', 'name'],
            key: 'facility',
            render: (_, record) => <span>{record.facility?.name || 'N/A'}</span>,
            ...getColumnSearchProps('facility.name'),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            ...getColumnSearchProps('date'),
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
            ...getColumnSearchProps('startTime'),
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
            ...getColumnSearchProps('endTime'),
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            ...getColumnSearchProps('paymentStatus'),
        },
        {
            title: 'Payable Amount',
            dataIndex: 'payableAmount',
            key: 'payableAmount',
            render: (amount) => `$${amount.toFixed(2)}`,
        },
        {
            title: 'Transaction ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
            ...getColumnSearchProps('transactionId'),
        },
        {
            title: 'View Booking',
            key: 'view',
            render: (_, record) => (
                <Link to={`/booking-details/${record._id}`}>
                    <Button>View Details</Button>
                </Link>
            ),
        },
        {
            title: 'Cancel Booking',
            key: 'cancel',
            render: (_, record) => (
                <>
                    <CancelBookingButton id={record._id} />
                </>
            ),
        },
    ];

    // Loading spinner while fetching bookings
    if (bookingIsLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <>
            <Table
                className="shadow-xl"
                columns={columns}
                dataSource={bookings}
                pagination={false}
                scroll={{ x: 700 }}
                rowKey={(record) => record._id}
            />
            <div className="flex justify-end mt-8">
                {Bookings && (
                    <PaginationComponent
                        current={page}
                        total={totalBookings}
                        pageSize={limit}
                        onChange={handlePageChange}
                    />
                )}
            </div>
        </>
    );
};

export default ManageMyBookingsTable;
