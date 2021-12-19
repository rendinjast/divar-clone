import { FC, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, TextField } from '../..';
import { CityType, IFinalCities } from '../../../redux/features/cities/cities.type';
import { CitiesSelector } from '../../../redux/features/cities/citiesSlice';

interface Props {
  cities: IFinalCities;
}
const CityList: FC<Props> = ({ cities }) => {
  const [search, setSearch] = useState<string>('');
  const [filtered, setFiltered] = useState<CityType[]>();

  useEffect(() => {
    const topCities = cities.topCities?.filter((x) => x.name.includes(search)) || [];
    const otherCities = cities.otherCities?.filter((x) => x.name.includes(search)) || [];
    setFiltered([...topCities, ...otherCities]);
  }, [search]);

  return (
    <>
      <div className="select-city__search">
        <form action="">
          <TextField
            focus
            // icon={<IoSearchOutline />}
            handleValue={search}
            handleChange={(e) => setSearch(e.target.value)}
            placeholder="جست‌و‌جوی سریع نام شهر..."
          />
        </form>
      </div>
      {filtered && search !== '' ? (
        <div className="select-city__cities-container">
          {filtered.map((c) => (
            <Link className="center outline" key={c.slug} to={`/s/${c.slug}`} text={c.name} />
          ))}
        </div>
      ) : (
        <>
          <div>
            <h3>شهرهای پربازدید</h3>
            <div className="select-city__cities-container">
              {cities.topCities?.map((c) => (
                <Link className="center outline" key={c.slug} to={`/s/${c.slug}`} text={c.name} />
              ))}
            </div>
          </div>
          <div>
            <h3>سایر شهرها</h3>
            <div className="select-city__cities-container">
              {cities.otherCities?.map((c) => (
                <Link className="center outline" key={c.id} to={`/s/${c.slug}`} text={c.name} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CityList;
