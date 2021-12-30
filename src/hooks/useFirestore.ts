import { useEffect, useState } from 'react';
import { generate } from 'shortid';
import { IPost, StatusType } from '../types';
import firebase from '../services/firebase';
import useToast from './useToast';

const useFirestore = () => {
  const { addToast } = useToast();

  const addData = async (col: string, data: any) => {
    try {
      const obj = {
        ...data,
        shortid: generate(),
        createdAt: Date.now(),
      };
      console.log(obj);
      await firebase.firestore().collection(col).add(obj);
    } catch (error) {
      console.log(error);
      addToast('error', error.message);
    }
  };

  return { addData };
};

export const useAds = () => {
  const [status, setStatus] = useState('');
  const { addToast } = useToast();
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    const syc = async () => {
      try {
        setStatus('loading');
        const collection = await firebase
          .firestore()
          .collection('ads')
          .orderBy('createdAt', 'desc')
          .get();
        const res = collection.docs.map((doc) => doc.data());
        setData(res);
        if (res.length === 0) {
          addToast('error', 'دیتایی برای نمایش وجود ندارد. لطفا فیلترشکن خود را روشن کنید.');
          setStatus('empty');
        }
        setStatus('success');
      } catch (error) {
        console.log(error);
        addToast('error', error.message);
        setStatus('error');
      }
    };
    syc();
  }, []);
  return { data, status };
};

export const usePost = (shortid: string) => {
  const [status, setStatus] = useState<StatusType>('loading');
  const [data, setData] = useState<IPost>();
  const { addToast } = useToast();
  const getPosts = async () => {
    try {
      setStatus('loading');
      const collection = await firebase
        .firestore()
        .collection('ads')
        .where('shortid', '==', shortid)
        .limit(1)
        .get();

      if (collection.empty) return setStatus('empty');
      collection.forEach((res) => {
        const final: IPost = res.data();
        setData(final);
        setStatus('success');
      });
    } catch (error) {
      console.log(error);
      setStatus('error');
      addToast('error', error.message);
    }
  };
  useEffect(() => {
    if (shortid) getPosts();
  }, [shortid]);
  return { data, status };
};

export default useFirestore;
