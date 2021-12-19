import { FC } from 'react'

interface SectionProps {
  title: string;
  className?: string;
}
const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};


export default Section