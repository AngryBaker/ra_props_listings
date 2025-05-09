
import './App.css'
import Listing from './components/Listing'
import rawItems from './data/etsy.json';

const items = rawItems as CardsProps[];

type CardsProps = {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};

const filteredItems: CardsProps[] = items.filter(
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

function App() {
  
  return (
    <>
      <Listing items={filteredItems} />
    </>
  )
}

export default App
