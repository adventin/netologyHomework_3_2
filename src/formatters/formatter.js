function formatCurrency(currency, price) {
  switch (currency) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    case 'GBP':
      return `${price} GBP`;
    default:
      return '';
  }
}

function formatQuantity(quantity) {
  switch (true) {
    case quantity <= 10:
      return 'level-low';
    case (quantity > 10 && quantity <= 20):
      return 'level-medium';
    case quantity > 20:
      return 'level-high';
  }
}

function formatTitle(title) {
  return title.length > 50 ? title.substr(0, 50) + '...' : title;
}

export { formatCurrency, formatQuantity, formatTitle };