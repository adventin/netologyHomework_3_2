import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default function Listing(props) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.filter(item => item.state === 'active').map((item) => {
        return (
          <ListItem key={item.listing_id} item={item} />
        )
      })}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

Listing.defaultProps = {
  items: []
}