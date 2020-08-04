import styles from './index.css';
import styled from 'styled-components';

import { Menu } from 'antd';
import { Fragment } from 'react';
const { SubMenu } = Menu;
const Left = styled.div`
  width: 256px;

  vertical-align: top;
  display: inline-block;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow:1px 1px 10px #ccc;
  text-align:center;
`;

const Right = styled.div`
  vertical-align: top;
  width: calc(100% - 256px);
  display: inline-block;
  background-color: #eee;
  margin-left: 256px;
`;

const Logo = styled.div`
  height: 150px;
  line-height:150px;
  text-aligh: center;
  vertical-align: middle;
  width: 100%;
  font-size:30px;
  background-color:#fff;
`;
function BasicLayout(props) {
  return (
    <Fragment>
      <Left>
        <Logo>CMS</Logo>
        <Menu mode="inline" style={{ width: 256 }}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>页面</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <a>页面列表</a>
            </Menu.Item>
            <Menu.Item key="22">
              <a>页面发布</a>
            </Menu.Item>
            <Menu.Item key="33">
              <a>发布审核</a>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="35">
            <a href='/image'>图片</a>
          </Menu.Item>
          <Menu.Item key="36">
            <a href='/video'>视频</a>
          </Menu.Item>
          <Menu.Item key="37">
            <a>文档</a>
          </Menu.Item>
        </Menu>
      </Left>
      <Right>{props.children}</Right>
    </Fragment>
  );
}

export default BasicLayout;
