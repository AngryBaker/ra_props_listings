type CardsProps = {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
};

type CardProps = {
    item: CardsProps;
};

const Card = ({ item }: CardProps) => {
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">
                    {item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code} {item.price}
                </p>
                <p className={`item-quantity ${item.quantity <= 10 ? 'level-low' :
                        item.quantity <= 20 ? 'level-medium' :
                            'level-high'
                    }`}>
                    {item.quantity} left
                </p>
            </div>
        </div>
    );
};

export default Card;