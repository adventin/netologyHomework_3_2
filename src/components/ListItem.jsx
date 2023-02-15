import PropTypes from 'prop-types';
import { formatCurrency, formatQuantity, formatTitle } from '../formatters/formatter';

export default function ListItem(props) {
  const { item } = props;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage && item.MainImage.url_570xN ? item.MainImage.url_570xN : ''} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(item.title)}</p>
        <p className="item-price">{formatCurrency(item.currency_code, item.price)}</p>
        <p className={`item-quantity ${formatQuantity(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}
