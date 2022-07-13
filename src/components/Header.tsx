import { Col, Input, Row, Select } from 'antd'
import React from 'react'
// import { Search } from 'react-router-dom'
import "C:/Users/Admin/Desktop/News Manager Project/src/index.css"

const { Search } = Input;
const { Option } = Select;

const onSearch = (value: string) => console.log(value);

function Header() {
    return (
        <Row className='header'>
            <Col></Col>
            <Col>
                <Row className='search-group'>
                    <Select defaultValue="Zhejiang">
                        <Option value="Zhejiang">Chủ đề 1</Option>
                        <Option value="Jiangsu">Chủ đề 2</Option>
                        <Option value="Jiangsu">Chủ đề 3</Option>
                    </Select>
                    <Search placeholder="Tìm kiềm" onSearch={onSearch}
                        style={{ width: 300, borderLeft: "none" }}
                        enterButton
                    />
                </Row>
            </Col>
            <Col>
                <Row className='header-buttons'>
                    <div className='login-btn'>Đăng nhập</div>
                    <div className='register-btn'>Đăng ký</div>
                </Row>
            </Col>
        </Row>
    )
}

export default Header