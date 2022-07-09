import { FormOutlined, MailOutlined, MessageOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Divider, Row } from 'antd'
import React from 'react'

import ChangeUserInfo from './ChangeUserInfo'

const UserInfo = () => {
  return (
    <>
      <Row style={{ justifyContent: "space-around" }}>
        <Col span={8} style={{ textAlign: "center", backgroundColor: "#fff", padding: "40px 20px", borderRadius: 10, position: "relative" }}>
          <Avatar size={100} icon={<UserOutlined />} style={{ margin: "0 auto" }} />
          <h2 style={{ marginTop: 10 }}>Anh Nguyễn Hoàng</h2>
          <Row style={{ justifyContent: "space-around" }}>
            <div>
              <h3 style={{ color: "#0082d5" }}>12</h3>
              Lượt xem
            </div>
            <div>
              <h3 style={{ color: "#0082d5" }}>0</h3>
              Người theo dõi
            </div>
            <div>
              <h3 style={{ color: "#0082d5" }}>0</h3>
              Đang theo dõi
            </div>
          </Row>
          <div style={{ textAlign: "left", marginTop: 10 }}>
            <UserOutlined />
            Khách
          </div>
          <div style={{ textAlign: "left", marginTop: 10 }}>
            <MailOutlined />
            hoanggiaanh171193@gmail.com
          </div>
          <Row style={{ justifyContent: "space-around", marginTop: 20 }}>
            <Col span={10} style={{ color: "#0082d5", border: "solid 1px #0082d5", padding: "5px 10px", borderRadius: 5 }}>
              <b>
                <PhoneOutlined />
                0367093593
              </b>
            </Col>
            <Col span={10} style={{ color: "#0082d5", border: "solid 1px #0082d5", padding: "5px 10px", borderRadius: 5 }}>
              <b>
                <MessageOutlined />
                Chat ngay
              </b>
            </Col>
          </Row>
          {/* <Divider /> */}
          <div style={{ position: "absolute", color: "#0082d5", fontSize: 15, top: 0, right: 0, padding: 10 }}>
            <FormOutlined />
            <div>Chỉnh sửa</div>
          </div>
        </Col>

        <Col span={12}>
          <ChangeUserInfo />
        </Col>
      </Row >
    </>
  )
}

export default UserInfo