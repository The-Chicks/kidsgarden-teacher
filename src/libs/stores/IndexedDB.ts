const idxDB = window.indexedDB.open('kidsgarden', 1);

idxDB.onerror = () => {
  console.log('error load idxDB');
};

const tokenTransaction = idxDB.result.transaction('tokenTable', 'readwrite');
const tokenTable = tokenTransaction.objectStore('tokenTable');
export const writeDB = (key: string, data: any) => {
  const write = tokenTable.put({ key, data });
  write.onsuccess = () => {
    tokenTransaction.oncomplete = () => {
      console.log('write');
    };
  };
  write.onerror = () => {
    console.log('write error');
  };
};

export const readDB = (key: string) => {
  const read = tokenTable.get(key);
  read.onerror = () => {
    console.log('read error');
  };
  return (read.onsuccess = (e) => {
    return e.returnValue;
  });
};
