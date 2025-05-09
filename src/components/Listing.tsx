import Card from './Card';

type CardsProps = {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};

type ListingProps = {
  items: CardsProps[];
};

const Listing = ({ items }: ListingProps) => {
  const filteredItems = items.filter(
    (item): item is CardsProps =>
      item &&
      typeof item.listing_id === 'number' &&
      typeof item.url === 'string' &&
      typeof item.title === 'string' &&
      typeof item.currency_code === 'string' &&
      typeof item.price === 'string' &&
      typeof item.quantity === 'number' &&
      item.MainImage &&
      typeof item.MainImage.url_570xN === 'string'
  );

  return (
    <div className="item-list">
      {filteredItems.map(item => (
        <Card key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;