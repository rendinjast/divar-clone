import { useEffect } from 'react';
import { useDataContext } from '../context/DataContext';
import firebase from '../services/firebase';

const useData = () => {
  const { dataState } = useDataContext();
  const getNames = (workspaceId, collectionId) => {
    const workspace = dataState.workspaces.data.filter((ws) => ws.id === workspaceId);
  };
  return { getNames };
};

export default useData;
