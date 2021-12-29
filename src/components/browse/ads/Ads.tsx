/* eslint-disable max-len */
import { useEffect } from 'react';
import { Button, TextField } from '../..';
import preDefined from '../../../fixtures/preDefined.json';
import { useAds } from '../../../hooks/useFirestore';
import AdCard from './adCard/AdCard';
import './ads.scss';

const Ads = () => {
  const { data, status } = useAds();
  useEffect(() => {
    console.log({ data, status });
  }, [data, status]);

  return (
    <div className="browse__ads-container">
      <form>
        <TextField placeholder="جست‌و‌جو در همه آگهی‌ها..." />
      </form>
      <div className="browse__ads__pre-defined">
        {preDefined.map((p: { slug: string; name: string }) => (
          <Button key={p.slug} look="outline round" text={p.name} />
        ))}
      </div>
      <div className="browse__ads__lists">
        {status === 'success' && data ? (
          data.map((dd) => (
            // eslint-disable-next-line react/jsx-indent
            <AdCard
              key={dd.shortid}
              shortid={dd.shortid}
              title={dd.title}
              image={dd.images && dd.images[0]}
              date={dd.createdAt}
              price={dd.price}
            />
            // eslint-disable-next-line indent
          ))
        ) : (
          <div>{status}</div>
        )}
      </div>
    </div>
  );
};

export default Ads;
