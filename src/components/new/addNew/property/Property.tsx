import { Dispatch, FC, memo, SetStateAction, useEffect, useState } from 'react';
import { Selector } from '../../..';
import { OptionsType, TypeType } from '../../../../redux/features/schema/schema.type';
import { FilterItemType } from '../../../../types';

interface Props {
  type: TypeType;
  name: string;
  options: OptionsType[];
  filters: FilterItemType[] | undefined;
  setFilters: Dispatch<SetStateAction<FilterItemType[]>>;
  errors: { [key: string]: string } | undefined;
}
const Property: FC<Props> = ({ name, type, options, filters, setFilters, errors }) => {
  const [selected, setSelected] = useState<OptionsType>();
  useEffect(() => {
    if (!selected) return;
    const exept = filters?.filter((x) => x.name !== name) || [];
    setFilters((prev: any) => [...exept!, { name, value: selected?.value }]);
  }, [selected]);
  if (type === 'select')
    return (
      <Selector
        options={options}
        selected={selected}
        setSelected={setSelected}
        placeholder="انتخاب"
        label="label"
        value="value"
        handleError={errors && errors[name]}
      />
    );
  return <></>;
};

export default memo(Property);
