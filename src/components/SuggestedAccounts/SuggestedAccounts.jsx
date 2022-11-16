import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import AccountSuggest from "./AccItem";
import AccountItem from "./AccItem";
import styles from './SuggestedAccounts.module.scss'
const cx = classNames.bind(styles);

function SuggestedAccounts({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx("label")}>{label}</p>
            <AccountSuggest/>
            <AccountSuggest/>
            <AccountSuggest/>
            <p className={cx("see-more")}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};


export default SuggestedAccounts;