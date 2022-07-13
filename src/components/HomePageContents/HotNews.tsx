/* eslint-disable jsx-a11y/alt-text */
import { RightOutlined } from '@ant-design/icons'
import { Col, Divider, Row } from 'antd'
import React from 'react'

function HotNews() {
    return (
        <>
            <h2>Tin tức nổi bật</h2>
            <Col>
                <Row style={{ backgroundColor: "#fff" }}>
                    <img style={{ width: 150 }} src='https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png'></img>
                    <div style={{ marginLeft: 10 }}>
                        <h3>Tỉnh Hậu Giang vừa quyết định chấp thuận chủ trương đầu tư dự án KĐT Trung tâm thành phố Ngã Bảy</h3>
                        <div>Content</div>
                    </div>
                    <Divider />
                </Row>
            </Col>
            <div style={{color: "#1890ff"}}>Xem thêm <RightOutlined /></div>
        </>
    )
}

export default HotNews