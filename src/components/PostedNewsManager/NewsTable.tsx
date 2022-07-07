import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';


const NewsTable: React.FC = () => {

  interface DataType {
    key: string;
    title: string;
    topic: number;
    date: string;
  }

  type DataIndex = keyof DataType;

  const data: DataType[] = [
    {
      key: '1',
      title: 'John Brown',
      topic: 32,
      date: 'New York No. 1 Lake Park',
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
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
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
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
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
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

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Chủ đề',
      dataIndex: 'topic',
      key: 'topic',
      width: '20%',
      ...getColumnSearchProps('topic'),
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'date',
      key: 'date',
      ...getColumnSearchProps('date'),
      sorter: (a, b) => a.date.length - b.date.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Xử lý',
      dataIndex: '',
      key: 'x',
      render: () => {
        return (
          <>
            <Button type='link' danger>Delete</Button>
            <Button type='link'>Edit</Button>
          </>
        )
      }
    }
  ];

  return (
    <>
      <Table style={{ textAlign: "center" }} columns={columns} dataSource={data} />
    </>
  )
}

export default NewsTable