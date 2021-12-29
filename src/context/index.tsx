import { FC } from 'react';
import UiContext from './AppContext';

const ParentContext: FC = ({ children }) => <UiContext>{children}</UiContext>;

export default ParentContext;
