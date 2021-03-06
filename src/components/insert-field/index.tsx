import history from '@/routes/history';
import { removeStorage } from '@/utils/storage';
import { Modal, Toast } from 'antd-mobile';
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import './index.less';

const { alert, prompt } = Modal;
type IProps = {
  env: string;
};
const InsertField = ({ env }: IProps) => {
  const logout = () => {
    alert('退出登录', '', [
      { text: '再看看', onPress: () => {} },
      {
        text: '退出',
        onPress: () => {
          removeStorage('token');
          history.replace('/login');
        }
      }
    ]);
  };
  const openModal = () => {
    prompt(
      '新增字段',
      `默认不开启，当前是${env}环境`,
      [
        {
          text: '取消',
          onPress: value => {}
        },
        {
          text: '添加',
          onPress: value =>
            new Promise((resolve, reject) => {
              // TODO api调用
              Toast.info('添加成功', 1);
              setTimeout(() => {
                resolve(1);
                console.log(`value:${value}`);
              }, 1000);
            })
        }
      ],
      'default',
      undefined,
      ['请输入要增加的字段']
    );
  };
  return (
    <div className="insert-field">
      <AiOutlineLogout className="header-btn btn-logout" onClick={logout} />
      <AiOutlinePlus className="header-btn btn-add" onClick={openModal} />
    </div>
  );
};
export default InsertField;
