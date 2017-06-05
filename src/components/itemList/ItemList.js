import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/items';
import WriteButton from '../../components/writeButton/WriteButton';

//connect is what allows us to connect a component to Redux's store, and
//itemsFetchData is the action creator we wrote earlier. We only need
//to import this one action creator, as it handles dispatching the other actions.


class ItemList extends Component {


componentDidMount() {
  this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
}


    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                        <WriteButton buttonName='Delete'/>
                    </li>
                ))}
            </ul>

        );
    }
}

// ItemList.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     items: PropTypes.array.isRequired,
//     hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

// a function that accepts state and then returns an object of props.
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

//dispatch our itemsFetchData() action creator with a prop
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
