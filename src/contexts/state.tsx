import React, {createContext, useState} from 'react';

import coinGecko from '../services/clients/coinGecko';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ICoin from '../types/ICoin';

interface StateContextData {
  favoriteCrypto: ICoin;
  cryptoList: ICoin[];
  // trackedCrypto: ICoin[];
  getList: () => void;
  setFavorite: (coin: ICoin) => void;
}

const StateContext = createContext<StateContextData>({} as StateContextData);

export const StateProvider = ({children}) => {
  const [cryptoList, setCryptoList] = useState<ICoin[]>([] as ICoin[]);
  const [favoriteCrypto, setFavoriteCrypto] = useState<ICoin>({} as ICoin);

  async function getList() {
    const response = await coinGecko.get('coins/markets?vs_currency=usd');
    setCryptoList(response.data);
  }

  async function setFavorite(coin: ICoin) {
    setFavoriteCrypto(coin);
  }

  return (
    <StateContext.Provider
      value={{
        favoriteCrypto,
        cryptoList,
        // trackedCrypto: [],
        getList,
        setFavorite,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
