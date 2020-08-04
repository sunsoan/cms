import styled from 'styled-components';
import { Form, Select, Button, Upload, Input,Col,Row } from 'antd';
const PageHeader = styled.div`
  width: 100%;
  height: 160px;
  background-color: #ddd;
`;

const PageBody = styled.div`
  min-height: 500px;
  padding-top: 60px;
  padding-left: 20px;
  display:flex;
`;

const GlobalFooter = styled.div`

  min-height:390px;
  background-color:#ddd;


`;

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export default function() {
  const onFinish = values => {};

  return (
    <div>
      <PageHeader></PageHeader>
      <PageBody>

        <div style={{ width: '500px' }}>
          <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
            <Form.Item label="视频命名">
              <Input />
            </Form.Item>
            <Form.Item
              name="select"
              label="标签"

              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请选择标签',
                },
              ]}
            >
              <Select placeholder="请选择一个标签">
                <Option value="china">动物类图片</Option>
                <Option value="usa">国旗</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="upload"
              label="上传视频"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="上传视频"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>点击上传</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div style={{minWidth:'300px',height:'500px',backgroundColor:'#aca'}}>

        </div>
      </PageBody>
      <GlobalFooter></GlobalFooter>
    </div>
  );
}
