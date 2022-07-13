import {
    CommentOutlined,
    LikeFilled,
    LikeOutlined,
    SaveFilled,
    SaveOutlined,
    TableOutlined,
    UserOutlined
} from '@ant-design/icons'
import { notification } from 'antd';
import { Col, Row } from 'antd'
import React, { useRef, useState } from 'react'
import "../index.css"

const ShowNews = () => {

    const [visibel, setVisibel] = useState(true)
    const [like, setLike] = useState(true)
    const [likeQuantity, setLikeQuantity] = useState(0)
    const [save, setSave] = useState(true)

    const newData = [
        {
            id: "",
            title: "",
            userName: "",
            content: "",
            hided: visibel,
            like: like,
            save: save
        }
    ]

    // Hàm xử lý thu gọn và xem thêm bài đăng
    const handleToggle = () => {
        if (visibel) {
            setVisibel(false)
        } else {
            setVisibel(true)
        }
    }

    //Hàm xử lý nút like
    const handleLike = () => {
        if (like) {
            setLike(false)
            setLikeQuantity(likeQuantity + 1)
        } else {
            setLike(true)
            setLikeQuantity(likeQuantity - 1)
        }
    }


    // Xử lý focus comment Input
    const commentInput = useRef<any>(null);

    const handleFocus = () => {
        commentInput.current?.focus();
    }

    // Xử lý lưu tin tức

    const Context = React.createContext({
        name: 'Default',
    });

    const [api, contextHolder] = notification.useNotification();

    const handleSave = () => {
        if (save) {
            setSave(false)
            api.info({
                message: ``,
                description: <Context.Consumer>{({ name }) => `Đã lưu bài viết!`}</Context.Consumer>,
            });
        } else {
            setSave(true)
        }
    }

    return (
        <Context.Provider
            value={{
                name: 'Ant Design',
            }}>
            {contextHolder}
            <Col span={15} style={{ margin: "0 auto" }}>
                <Row>
                    <Col span={4}>
                        <div className='user-items' style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
                            <p>
                                <UserOutlined />
                                <b>User Name</b>
                            </p>
                            <p><span><b>?</b></span> lượt xem</p>
                            <p><span><b>?</b></span> người theo dõi</p>
                            <p><span><b>?</b></span> đang theo dõi</p>
                        </div>

                        <div className='select-options' style={{ marginTop: 20, backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
                            <p><TableOutlined /><b> Bảng tin</b></p>
                            <p><SaveOutlined /><b> Bài viết đã lưu</b></p>
                        </div>
                    </Col>

                    <Col span={15} style={{ marginLeft: 20 }}>
                        <div className='share-news' style={{ backgroundColor: "#fff", padding: "10px 20px", borderRadius: 5 }}>
                            <p>
                                <UserOutlined />
                                <b>Posted User Name</b>
                            </p>
                            <p>Bạn muốn chia sẻ điều gì?</p>
                        </div>

                        {newData.map(data => (
                            <div key={data.id} className='new-contener' style={{ backgroundColor: "#fff", marginTop: 20 }}>

                                <div style={{ padding: 20, }}>
                                    <h2 className='new-title'>Tỉnh Hậu Giang vừa quyết định chấp thuận chủ trương đầu tư dự án KĐT Trung tâm thành phố Ngã Bảy</h2>
                                    <p>User Name</p>
                                    <div className={data.hided ? "hide" : "show"}>
                                        <p>✔️ CafeLand - UBND tỉnh Hậu Giang vừa quyết định chấp thuận chủ trương đầu tư dự án Khu đô thị Trung tâm thành phố Ngã Bảy (khu D) tại phường Ngã Bảy, thành phố Ngã Bảy.</p>
                                        <p>✔️ Hậu Giang chấp thuận chủ trương đầu tư khu đô thị hơn 400 tỷ tại thành phố Ngã Bảy</p>
                                        <p>✔️ Thành phố Ngã Bảy (tỉnh Hậu Giang) nhìn từ trên cao.</p>
                                        <p>✔️ Dự án có diện tích khoảng 1,741ha, bao gồm các hạng mục: trung tâm thương mại kết hợp với khách sạn tiêu chuẩn từ 3 sao trở lên với số tầng cao xây dựng từ 11 - 12 tầng, với diện tích 1.200m2. Các khối nhà ở thương mại với diện tích 7.802,4m2.</p>
                                        <p>✔️ Trong đó, cơ cấu sản phẩm nhà ở gồm 86 căn nhà ở thương mại (11 căn biệt thự và 75 căn nhà ở liền kề) với chiều cao 4 tầng và khối trung tâm thương mại kết hợp với khách sạn tiêu chuẩn từ 3 sao trở lên cao từ 11 - 12 tầng.</p>
                                        <p>✔️ Ngoài ra là diện tích dành cho kết cấu hạ tầng như: công viên cây xanh, với diện tích 576,8m2; Đường giao thông - bãi đỗ xe, với diện tích 7.831m2.</p>
                                        <p>✔️ Dự kiến tổng mức đầu tư của dự án hơn 403 tỷ đồng, trong đó chi phí thực hiện dự án 353 tỷ, tiền sử dụng đất, thuê đất 50 tỷ đồng.</p>
                                        <p>✔️ Về tiến độ thực hiện dự án, hoàn thành và đưa vào khai thác sử dụng trong vòng 28 tháng kể từ ngày nhà đầu tư được quyết định giao đất, quyết định cho thuê đất.</p>
                                        <p>✔️ Tỉnh sẽ lựa chọn nhà đầu tư thực hiện dự án theo hình thức đấu giá quyền sử dụng đất theo quy định của pháp luật về đất đai.</p>
                                        <p>✔️ Trung tâm Phát triển quỹ đất tỉnh được giao tổ chức đấu giá quyền sử dụng đất theo quy định của pháp luật về đất đai.</p>
                                    </div>
                                    <div style={{ color: 'blue', cursor: "pointer", display: "inline-block" }}>
                                        <p onClick={handleToggle}>
                                            {visibel ? ". . . Xem thêm" : "Rút gọn"}
                                        </p>
                                    </div>
                                </div>

                                <div className='feedback-items'>
                                    <Row style={{ justifyContent: "space-around", fontSize: 20, marginTop: 10, padding: "10px 0", borderTop: "solid 1px #ccc", borderBottom: "solid 1px #ccc" }}>
                                        <div style={{ cursor: "pointer" }} onClick={handleLike}>{data.like ? <LikeOutlined /> : <LikeFilled />}(<span>{likeQuantity}</span>)</div>
                                        <div style={{ cursor: "pointer" }} onClick={handleFocus}><CommentOutlined /></div>
                                        <div style={{ cursor: "pointer" }} onClick={() => handleSave()}>{data.save ? <SaveOutlined /> : <SaveFilled />}</div>
                                    </Row>
                                    <Row className='comment' style={{ padding: 20, display: "hiden" }}>
                                        <UserOutlined style={{ fontSize: 30 }} />
                                        <input
                                            style={{ backgroundColor: "#f9fafb", width: "90%", marginLeft: 5, borderRadius: 50, padding: "4px 10px", border: "1px solid #d2d2d2", outline: "none" }}
                                            ref={commentInput}
                                            id="comment"
                                            name="comment"
                                        />
                                    </Row>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Col >
        </Context.Provider>
    )
}

export default ShowNews