import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles);
function AccountSuggest() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/76edae66985c6452d42ca28350cebaa5~c5_100x100.jpeg?x-expires=1668772800&x-signature=sRPaFWBt9pl%2BlTFaqiUElo3lZGg%3D"
                alt=""
                srcset="" />
            <div className={cx('item-infor')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvana</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyễn Văn A</p>
            </div>
        </div>
    );
}

AccountSuggest.propTypes = {
}

export default AccountSuggest;