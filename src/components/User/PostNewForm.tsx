import { Col, Form, Input, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
// import 'src/index.css';
import { useState } from 'react';
import { UploadFile } from 'antd/lib/upload/interface';
import TextArea from 'antd/lib/input/TextArea';


const PostNewForm = () => {

    const { Option } = Select;

    const normFile = (e: any) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };

    const fileList: UploadFile[] = [
        // {
        //     uid: '-1',
        //     name: 'xxx.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ];

    const [inputTitle, setInputTitle] = useState("")
    const [inputTopic, setInputTopic] = useState("")
    const [inputContent, setInputContent] = useState("")
    const [photo, setPhoto] = useState(fileList)

    const handleInputTopic = (e: any) => {
        setInputTopic(e)
    }

    const handleInputTitle = (e: any) => {
        setInputTitle(e.target.value)
    }

    const handleInputConent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputContent(e.target.value)
    }

    const handleUploadPhoto = (e: any) => {
        setPhoto(e.fileList)
    }

    const onFinish = (value: any) => {
        console.log('Success:', value);
    };

    const addNew = () => {

    }



    return (
        <Col span={15} style={{ margin: "0 auto 0 auto" }}>
            <h2>Tạo bài viết</h2>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: 10 }}>
                <div>
                    <Form
                        name="validate_other"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="select"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy chọn chủ đề của bài viết!',
                                },
                            ]}
                        >
                            <Select onChange={handleInputTopic} placeholder="Chọn chủ đề *">
                                <Option value="Chủ đề 1">Chủ đề 1</Option>
                                <Option value="Chủ đề 2">Chủ đề 2</Option>
                                <Option value="Chủ đề 3">Chủ đề 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="topic"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập tiêu đề của bài viết!',
                                }
                            ]}>
                            <Input onChange={handleInputTitle} showCount maxLength={20} placeholder='Nhập tiêu đề bài viết *' />
                        </Form.Item>

                        <Form.Item
                            name="content"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập nội dung của bài viết!',
                                }
                            ]}>
                            {/* <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onReady={(editor: any) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event: any, editor: { getData: () => any; }) => {
                                    const data = editor.getData();
                                    // console.log({ event, editor, data });
                                    setInputContent(data)
                                    // console.log(inputContent)
                                }}
                            /> */}
                            <TextArea onChange={handleInputConent} style={{ height: 120 }} />
                        </Form.Item>

                        <Form.Item
                            name="upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                // defaultFileList={[...fileList]}
                                className="upload-list-inline"
                                onChange={handleUploadPhoto}
                            >
                                <Button icon={<UploadOutlined />}>Thêm ảnh</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                span: 12,
                                offset: 6,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Đăng tin
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Col >
    )
}




export default PostNewForm