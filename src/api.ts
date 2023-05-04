import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

interface GoodsAPI {
  image: string;
  name: string;
  info: string;
  price: number;
}

interface GoodsItem extends GoodsAPI {
  id: string;
}

export const initializeAPI = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCWDDasjKyXJV1FqtuwIyg3sYikxtMm8t0",
    authDomain: "karpov-frontend-homework.firebaseapp.com",
    projectId: "karpov-frontend-homework",
    storageBucket: "karpov-frontend-homework.appspot.com",
    messagingSenderId: "169428170688",
    appId: "1:169428170688:web:bfddea098b66071710fa25"
  };

  initializeApp(firebaseConfig);
  getFirestore();
};

/**
 * Запрашивает товары по АПИ
 */
export const getGoods = async (): Promise<GoodsItem[]> => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "food-goods"));
  const result: GoodsItem[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as GoodsAPI;

    result.push({ id: doc.id, ...data });
  });

  return result;
};
