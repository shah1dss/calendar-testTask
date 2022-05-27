import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = UseTypedSelector(state => state.auth)
  return (
    <Layout.Header>
      <Row justify="end">
       
         {isAuth ? 
         <>
         <div style={{color: 'white'}}>
           Name
         </div>
          <Menu  
          theme="dark"
          mode="horizontal"
          selectable={false}
          >
            <Menu.Item 
            // onClick={() => navigate('/login')} 
            key={1}
            >
              Выйти
            </Menu.Item> 
          </Menu>
          </>
          :
          <Menu  
            theme="dark"
            mode="horizontal"
            selectable={false}
          >
          <Menu.Item 
          onClick={() => navigate('/login')} 
          key={1}
          >
            Войти
          </Menu.Item> 
        </Menu>
        }
      </Row>
    </Layout.Header>
  );
};

export default Navbar;