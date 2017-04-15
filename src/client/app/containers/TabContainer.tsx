import { connect } from 'react-redux';
import TabItem from '../components/TabItem';
import { setActiveTab } from '../actionFunctions/TabVisibility'


const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.activeTab
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch(setActiveTab(ownProps.filter));
        }
    }
}

const TabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabItem);

export default TabContainer;