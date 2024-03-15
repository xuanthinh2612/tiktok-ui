import TippyHeadless from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import styles from '~/components/Popper/Menu/Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <TippyHeadless
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </TippyHeadless>
    );
}

export default Menu;
