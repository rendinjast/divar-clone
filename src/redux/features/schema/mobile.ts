import { SchemaItem } from './schema.type';
export const MobilePhones: SchemaItem = {
  id: 'mobile-phones',
  title: 'گوشی موبایل',
  required: ['brand', 'status', 'sim_card_slot'],
  properties: [
    {
      id: 'brand',
      title: 'برند',
      type: 'select',
      options: [
        { label: 'Samsung::سامسونگ', value: 'Samsung::سامسونگ' },
        { label: 'Apple::اپل', value: 'Apple::اپل' },
        { label: 'HTC::اچ‌تی‌سی', value: 'HTC::اچ‌تی‌سی' },
        { label: 'Sony Ericsson::سونی اریکسون', value: 'Sony Ericsson::سونی اریکسون' },
        { label: 'Nokia::نوکیا', value: 'Nokia::نوکیا' },
        { label: 'Sony::سونی', value: 'Sony::سونی' },
        { label: 'LG::ال‌جی', value: 'LG::ال‌جی' },
        { label: 'Motorola::موتورلا', value: 'Motorola::موتورلا' },
        { label: 'Huawei::هوآوی', value: 'Huawei::هوآوی' },
        { label: 'BlackBerry::بلک‌بری', value: 'BlackBerry::بلک‌بری' },
        { label: 'ZTE::زد‌تی‌ای', value: 'ZTE::زد‌تی‌ای' },
        { label: 'Acer::ایسر', value: 'Acer::ایسر' },
        { label: 'Lenovo::لنوو', value: 'Lenovo::لنوو' },
        { label: 'Asus::ایسوس', value: 'Asus::ایسوس' },
        { label: 'Smart::اسمارت', value: 'Smart::اسمارت' },
        { label: 'Microsoft::مایکروسافت', value: 'Microsoft::مایکروسافت' },
        { label: 'Honor::آنر', value: 'Honor::آنر' },
        { label: 'Blu::بلو', value: 'Blu::بلو' },
        { label: 'Tecno::تکنو', value: 'Tecno::تکنو' },
        { label: 'GLX::جی‌ال‌ایکس', value: 'GLX::جی‌ال‌ایکس' },
        { label: 'GPlus::جی‌پلاس', value: 'GPlus::جی‌پلاس' },
        { label: 'Xiaomi::شیائومی', value: 'Xiaomi::شیائومی' },
        { label: 'CAT::کاترپیلار', value: 'CAT::کاترپیلار' },
        { label: 'Google::گوگل', value: 'Google::گوگل' },
        { label: 'Hyundai::هیوندای', value: 'Hyundai::هیوندای' },
        { label: 'OnePlus::وان‌پلاس', value: 'OnePlus::وان‌پلاس' },
        { label: 'سایر', value: 'غیره' },
      ],
    },
    {
      id: 'status',
      title: 'وضعیت',
      type: 'select',
      options: [
        { label: 'نو', value: 'new' },
        { label: 'در حد نو', value: 'like-new' },
        { label: 'کارکرده', value: 'used' },
        { label: 'نیاز به تعمیر', value: 'repair-needed' },
      ],
    },
    {
      id: 'sim_card_slot',
      title: 'تعداد سیمکارت',
      type: 'select',
      options: [
        { label: '۱', value: '1' },
        { label: '۲', value: '2' },
        { label: '۳ و بیشتر', value: '+3' },
      ],
    },
    {
      id: 'original_or_fake',
      title: 'اصالت برند',
      type: 'select',
      options: [
        { label: 'اصل', value: 'original' },
        { label: 'غیراصل', value: 'fake' },
      ],
    },
    {
      id: 'rom',
      title: 'حافظه دستگاه',
      type: 'select',
      options: [
        { label: 'مطرح نیست', value: 'irrelevant' },
        { label: '۵۱۲ مگابایت', value: '512MB' },
        { label: '۱ گیگابایت', value: '1GB' },
        { label: '۲ گیگابایت', value: '2GB' },
        { label: '۳ گیگابایت', value: '3GB' },
        { label: '۴ گیگابایت', value: '4GB' },
        { label: '۸ گیگابایت', value: '8GB' },
        { label: '۱۳ گیگابایت', value: '13GB' },
        { label: '۱۶ گیگابایت', value: '16GB' },
        { label: '۲۰ گیگابایت', value: '20GB' },
        { label: '۳۲ گیگابایت', value: '32GB' },
        { label: '۶۴ گیگابایت', value: '64GB' },
        { label: '۱۲۸ گیگابایت', value: '128GB' },
        { label: '۲۵۶ گیگابایت', value: '256GB' },
        { label: '۵۱۲ گیگابایت', value: '512GB' },
        { label: '۱ ترابایت', value: '1TB' },
      ],
    },
    {
      id: 'ram',
      title: 'مقدار رم',
      type: 'select',
      options: [
        { label: 'مطرح نیست', value: 'irrelevant' },
        { label: '۵۱۲ مگابایت', value: '512MB' },
        { label: '۷۶۸ مگابایت', value: '768MB' },
        { label: '۱ گیگابایت', value: '1GB' },
        { label: '۱.۵ گیگابایت', value: '1.5GB' },
        { label: '۲ گیگابایت', value: '2GB' },
        { label: '۳ گیگابایت', value: '3GB' },
        { label: '۴ گیگابایت', value: '4GB' },
        { label: '۶ گیگابایت', value: '6GB' },
        { label: '۸ گیگابایت', value: '8GB' },
        { label: '۱۰ گیگابایت', value: '10GB' },
        { label: '۱۲ گیگابایت', value: '12GB' },
        { label: '۱۶ گیگابایت', value: '16GB' },
        { label: '۱۸ گیگابایت', value: '18GB' },
      ],
    },
  ],
};
