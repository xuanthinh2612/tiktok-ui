import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d70d41a605dec9a0a0ccf6eccb8eca3c.jpeg?lk3s=a5d48078&x-expires=1710590400&x-signature=BdZywJ7OHFJ%2Fcga3py50yECT7tk%3D"
                alt="arvatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Tran Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <span className={cx('username')}>tranvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
