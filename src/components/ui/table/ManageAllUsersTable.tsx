import React, { useRef, useState } from "react";
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Spin, Table } from 'antd';
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { TFullUser } from "../../../types/user/user.type";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import PaginationComponent from "../Pagination/Pagination";
import BlockUserButton from "../button/BlockUserButton";

type DataIndex = keyof TFullUser | 'user.email' | 'user.role' | 'user.status';

const ManageAllUsersTable: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState<DataIndex | ''>('');
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const searchInput = useRef<InputRef>(null);
    const token = useSelector(useCurrentToken);

    // Query to fetch all users, with pagination parameters
    const { data: Users, isLoading: usersIsLoading } = useGetAllUsersQuery({
        token,
        page,
        limit
    });

    // Total users from API
    const totalUsers = Users?.data?.total || 0;

    // Filter out deleted users
    const users: TFullUser[] = Users?.data?.data?.filter(
        (user: TFullUser) => !user?.user.isDeleted
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

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<TFullUser> => ({
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
        onFilter: (value, record) => {
            if (dataIndex === 'user.email') {
                return (record.user?.email || '').toLowerCase().includes((value as string).toLowerCase());
            }
            if (dataIndex === 'user.role') {
                return (record.user?.role || '').toLowerCase().includes((value as string).toLowerCase());
            }
            if (dataIndex === 'user.status') {
                return (record.user?.status || '').toLowerCase().includes((value as string).toLowerCase());
            }
            // For other top-level fields in TFullUser
            return (record[dataIndex] || '').toString().toLowerCase().includes((value as string).toLowerCase());
        },
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
    const columns: TableColumnsType<TFullUser> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Email',
            dataIndex: ['user', 'email'],
            key: 'email',
            render: (_, record) => <span>{record.user?.email || 'N/A'}</span>,
            ...getColumnSearchProps('user.email'),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Role',
            dataIndex: ['user', 'role'],
            key: 'role',
            render: (_, record) => <span>{record.user?.role || 'N/A'}</span>,
            ...getColumnSearchProps('user.role'),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: ['user', 'status'],
            key: 'status',
            render: (_, record) => <span>{record.user?.status || 'N/A'}</span>,
            ...getColumnSearchProps('user.status'),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, users) => (
                <Space size="middle">
                    <BlockUserButton id={users?.user?._id} />
                </Space>
            ),
        },
    ];

    // Loading spinner while fetching users
    if (usersIsLoading) {
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
                dataSource={users}
                pagination={false}
                scroll={{ x: 700 }}
                rowKey={(record) => record._id}
            />
            {Users && (
                <PaginationComponent
                    current={page}
                    total={totalUsers}
                    pageSize={limit}
                    onChange={handlePageChange}
                />
            )}
        </>
    );
};

export default ManageAllUsersTable;
