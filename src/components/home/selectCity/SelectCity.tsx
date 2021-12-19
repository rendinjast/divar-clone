import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Button, Selector, TextField } from '../..';
import useResponsive from '../../../hooks/useResponsive';
import { CityType } from '../../../redux/features/cities/cities.type';
import { CitiesSelector } from '../../../redux/features/cities/citiesSlice';
import CityList from './CityList';
import './selectCity.scss';

const SelectCity = () => {
  const cities = useSelector(CitiesSelector)
  const [selected, setSelected] = useState<CityType>();
  const responsive = useResponsive();
  const history = useHistory();
  useEffect(() => {
    if (selected) history.push(`/s/${selected?.slug!}`);
  }, [selected]);

  if(!cities) return <div>wait</div>
  return (
    <div className="select-city">
      {responsive !== 'mobile' ? (
        <CityList cities={cities} />
      ) : (
        // <div>erfan</div>
        <Selector
          options={[...cities?.topCities!,...cities?.topCities!]}
          value="slug"
          selected={selected}
          setSelected={setSelected}
          label="name"
          searchable
          placeholder="شهر خود را انتخاب کنید..."
        />
      )}
    </div>
  );
};

export default SelectCity;


