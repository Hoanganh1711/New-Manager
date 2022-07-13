import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import React, { useId, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import nextId from "react-id-generator";

import PostNewForm from './PostNewForm';

const NewsTable: React.FC = () => {
  const [htmlId]: any = useId();

  interface DataType {
    id: any;
    key: string,
    title: string;
    topic: string;
    date: string;
  }

  type DataIndex = keyof DataType;

  const datas: DataType[] = [
    {
      id: {htmlId},
      key: '1',
      title: 'A',
      topic: "Chủ đề 1",
      date: 'New York No. 1 Lake Park',
    },
    {
      id: {htmlId},
      key: '2',
      title: 'B',
      topic: "Chủ đề 2",
      date: 'New York No. 1 Lake Park',
    },
    {
      id: {htmlId},
      key: '3',
      title: 'C',
      topic: "Chủ đề 3",
      date: 'New York No. 1 Lake Park',
    },
    {
      id: {htmlId},
      key: '4',
      title: 'D',
      topic: "Chủ đề 1",
      date: 'New York No. 1 Lake Park',
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [listData, setListData] = useState(datas)

  const deleteOneNew = (index: any, row: any) => {
    const filtered = listData.filter((data) => {
      console.log(data);


      return data.id !== row.id

    })
    setListData(filtered)
    console.log((filtered));
  }

  // const addOneNew = (inputTitle: any, inputTopic: any, inputConten: any,) => {
  //   let copy = [...listData]
  //   copy = [...copy, { id: {htmlId}, key: inputTitle, title: inputTitle, topic: inputTopic, date: "New York No. 1 Lake Park" }];
  //   setListData(copy);
  // }

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
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text: string) => <a href='#'>{text}</a>,
    },
    {
      title: 'Chủ đề',
      dataIndex: 'topic',
      key: 'topic',
      width: '20%',
      filters: [
        {
          text: 'Chủ đề 1',
          value: 'Chủ đề 1',
        },
        {
          text: 'Chủ đề 2',
          value: 'Chủ đề 2',
        },
        {
          text: 'Chủ đề 3',
          value: 'Chủ đề 3',
        },
      ],
      onFilter: (value: any, record: any) => record.topic.indexOf(value) === 0,
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'date',
      key: 'date',
      // ...getColumnSearchProps('date'),
      // sorter: (a, b) => a.date.length - b.date.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Xử lý',
      dataIndex: 'action',
      key: 'action',
      render: (abc, row) => {
        return (
          <>
            <Button onClick={() => deleteOneNew(abc, row)} type='link' danger>Xóa tin</Button>
            <Button type='link'>Sửa tin</Button>
          </>
        )
      }
    }
  ];

  return (
    <>
      <Table style={{ textAlign: "center" }} columns={columns} dataSource={listData} />
    </>
  )
}

export default NewsTable
