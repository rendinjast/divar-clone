import { FC, FormEvent, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Map, Selector, TextField } from '../..';
import useFirestore from '../../../hooks/useFirestore';
import ImageSection from './Image/ImageSection';
import Property from './property/Property';
import Section from './Section';
import { CitiesSelector } from '../../../redux/features/cities/citiesSlice';
import { CityType } from '../../../redux/features/cities/cities.type';
import { LoadSchema, SchemaSelector } from '../../../redux/features/schema/schemaSlice';
import { FilterItemType } from '../../../types';
import { CategoriesSelector } from '../../../redux/features/categories/categoriesSlice';
import './addNew.scss';

interface Props {
  category: string;
  setCategory: (value: string | null) => void;
}
const AddNew: FC<Props> = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(CategoriesSelector);
  const cities = useSelector(CitiesSelector);
  const [allCities, setAllCities] = useState<CityType[]>([
    ...cities?.topCities!,
    ...cities?.otherCities!,
  ]);
  const schema = useSelector(SchemaSelector);
  const history = useHistory();
  const [filters, setFilters] = useState<FilterItemType[]>();
  const [errors, setErrors] = useState<{ [key: string]: string }>();
  const memoErrors = useMemo(() => errors, [errors]);
  const { addData } = useFirestore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState<CityType>();
  const [price, setPrice] = useState('');
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [mapCenter, setMapCenter] = useState<[number, number]>();
  const [phone, setPhone] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (city?.centroid) {
      setMapCenter([city.centroid.latitude, city.centroid.longitude]);
    }
  }, [city]);
  useEffect(() => {
    console.log('memo => ', memoErrors);
  }, [memoErrors]);
  useEffect(() => {
    dispatch(LoadSchema(category));
  }, [category]);

  useEffect(() => {
    const SavedCity = localStorage.getItem('city');
    const getSavedCity = allCities.find((x) => x.slug === SavedCity);
    if (getSavedCity) {
      setCity(getSavedCity);
      setMapCenter([getSavedCity.centroid.latitude, getSavedCity.centroid.longitude]);
    }
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let err: any = null;
    if (price.length < 1) err = { ...err, price: '???????? ?????????? ??????' };
    if (phone.length < 1) err = { ...err, phone: '???????? ?????????? ???????? ????????' };
    if (title.length < 1) err = { ...err, title: '?????????? ???????? ??????????????????? ???????? ????????.' };
    if (!city) err = { ...err, price: '?????? ???? ???????????? ????????' };
    schema.data?.required.forEach((name) => {
      const item = filters?.find((x) => x.name === name);
      if (!item) err = { ...err, [name]: '?????? ???????? ?????????? ??????' };
    });

    if (err) {
      setErrors(err);
      console.log('dont send');
    } else {
      await addData('ads', {
        category,
        title,
        description,
        position: {
          lat: position.lat,
          lng: position?.lng,
        },
        city,
        price,
        phone,
        images,
        filters,
      });
      history.push('/');
    }
  };

  return (
    <div className="add-new__container">
      <form onSubmit={handleSubmit}>
        <Section title="?????? ????????">
          <div className="add-new__category">
            <span>{categories?.find((x) => x.slug === category)?.title}</span>
            <Button
              text="?????????? ???????????????????"
              onClick={() => setCategory(null)}
              look="strong primary-txt space s-3"
            />
          </div>
        </Section>
        <Section title="??????">
          <Selector
            options={allCities}
            setSelected={setCity}
            selected={city}
            label="name"
            value="slug"
            placeholder="?????? ?????? ???? ?????????? ????????..."
            searchable
          />
        </Section>
        <Section title="????????">
          {mapCenter && (
            <Map
              center={{ lat: mapCenter[0], lng: mapCenter[1] }}
              draggable
              position={position}
              setPosition={setPosition}
            />
          )}
        </Section>
        <ImageSection images={images} setImages={setImages} />
        {schema.status === 'success' &&
          schema.data &&
          schema.data.properties.map((property) => (
            <Section key={property.id} title={property.title}>
              <Property
                type={property.type}
                options={property.options!}
                name={property.id}
                filters={filters}
                setFilters={setFilters}
                errors={memoErrors}
              />
            </Section>
          ))}
        <Section title="????????">
          <TextField
            type="number"
            placeholder="???????? ???? ??????????"
            handleValue={price!}
            handleChange={(e) => setPrice(e.target.value)}
            handleError={errors?.price}
          />
        </Section>
        <Section title="?????????? ????????????">
          <TextField
            type="number"
            name="phone"
            placeholder="?????????? ???????????? ?????? (**** *** 0911)"
            handleValue={phone}
            handleChange={(e) => setPhone(e.target.value)}
            handleError={errors?.phone}
          />
        </Section>
        <Section title="?????????? ????????">
          <TextField
            placeholder="???????? ???????????? ???????? x3"
            handleValue={title}
            handleChange={(e) => setTitle(e.target.value)}
            handleError={errors?.title}
          />
        </Section>
        <Section title="?????????????? ????????" className="add-new__description">
          <span className="textview lighten">
            ???????????? ?? ???????? ???????? ???????? ???????? ?????? ???? ???????? ?? ???????? ??????????????. ?????? ?????????? ???????????? ???? ?????? ????????
            ???????? ???????? .
          </span>
          <textarea
            name="fulan"
            id="fulan"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Section>
        <section className="add-new__submit">
          <Button text="????????????" look="outline space" />
          <Button text="?????????? ????????" submit look="primary space" disabled={false} />
        </section>
      </form>
    </div>
  );
};

export default AddNew;
