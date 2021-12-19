import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = firebase.storage().ref(file.name);
    storageRef.put(file).on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => console.log(err),
      async () => {
        const downloadLink = await storageRef.getDownloadURL();
        setUrl(downloadLink);
        console.log(downloadLink);
      }
    );
  }, [file]);

  return { progress, url };
};
export default useStorage;
