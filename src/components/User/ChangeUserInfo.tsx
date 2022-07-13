import { Col, Divider, Row } from 'antd'
import React from 'react'

const ChangeUserInfo = () => {

    const userData = [
        {   
            fullName: "Anh Nguyễn Hoàng",
            birthday: "17/11/1993",
            Email: "hoanggiaanh171193@gmail.com",
            phoneNumber: "0367093593",
            address: "Cầu Giấy, Hà Nội"
        }
    ]

    return (
        <>
            {userData.map((data) => {
                return (
                    <div key="data" style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}>
                        <h3>Cài đặt thông tin</h3>
                        <div style={{ marginTop: 30 }}>
                            <Row style={{justifyContent: "space-between"}}>
                                <Col span={5}>
                                    <b>Họ và tên</b>
                                </Col>
                                <Col span={12} style={{textAlign: "left"}}>
                                    {data.fullName}
                                </Col>
                                <Col>
                                    <p style={{color: "#0082d5"}}>Chỉnh sửa</p>
                                </Col>
                            </Row>
                            <Divider />
                            <Row style={{justifyContent: "space-between"}}>
                                <Col span={5}>
                                    <b>Ngày sinh</b>
                                </Col>
                                <Col span={12} style={{textAlign: "left"}}>
                                    {data.birthday}
                                </Col>
                                <Col>
                                    <p style={{color: "#0082d5"}}>Chỉnh sửa</p>
                                </Col>
                            </Row>
                            <Divider />
                            <Row style={{justifyContent: "space-between"}}>
                                <Col span={5}>
                                    <b>Email</b>
                                </Col>
                                <Col span={12} style={{textAlign: "left"}}>
                                    {data.Email}
                                </Col>
                                <Col>
                                    <p style={{color: "#0082d5"}}>Chỉnh sửa</p>
                                </Col>
                            </Row>
                            <Divider />
                            <Row style={{justifyContent: "space-between"}}>
                                <Col span={5}>
                                    <b>Điện thoại</b>
                                </Col>
                                <Col span={12} style={{textAlign: "left"}}>
                                    {data.phoneNumber}
                                </Col>
                                <Col>
                                    <p style={{color: "#0082d5"}}>Chỉnh sửa</p>
                                </Col>
                            </Row>
                            <Divider />
                            <Row style={{justifyContent: "space-between"}}>
                                <Col span={5}>
                                    <b>Địa chỉ</b>
                                </Col>
                                <Col span={12} style={{textAlign: "left"}}>
                                    {data.address}
                                </Col>
                                <Col>
                                    <p style={{color: "#0082d5"}}>Chỉnh sửa</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ChangeUserInfo