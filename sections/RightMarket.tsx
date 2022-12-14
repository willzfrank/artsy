import Image from 'next/image';
import Link from 'next/link';
import { MarketImage } from '../component';
import style from '../styles/RightMarket.module.css';

type Product = {
  id: string;
  name: string;
  creator: string;
  origin: string;
  views: string;
  price: {
    usd: number;
    eth: number;
  };
  size: {
    ft: number;
  };
  url: string;
};

type marketPlaceMainPropType = {
  products: Product[];
};

function RightMarket({ products }: marketPlaceMainPropType) {
  return (
    <div className={style.rightMarketMain}>
      {products.map((product) => (
        <Link key={product.id} href={`/MarketPlace/${product.id}`}>
          <div className={style.MarketImage}>
            <div className={style.image}>
              <Image
                src={product.url}
                width={240}
                height={280}
                alt={product.name}
                className={style.imageMain}
              />
            </div>
            <div className={style.mobileFlex}>
              <h2 className={style.mobileFlexName}>{product.name}</h2>
              <h3>${product.price.usd}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RightMarket;
