import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'

const UserInfo = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Anh Nguyễn Hoàng</h2>
          <Row>
            <div>
              <h3>12</h3>
              Lượt xem
            </div>
            <div>
              <h3>0</h3>
              Người theo dõi
            </div>
            <div>
              <h3>0</h3>
              Đang theo dõi
            </div>
          </Row>
          <div>
            <UserOutlined />
            Khách
          </div>
          <div>
            <MailOutlined />
            hoanggiaanh171193@gmail.com
          </div>
          <Row>
            <div>
              <PhoneOutlined />
              0367093593
            </div>
            <div>

            </div>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default UserInfo