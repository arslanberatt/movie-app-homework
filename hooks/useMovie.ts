import { Movie } from '@/app/types/types';
import { db } from '@/services/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ['movies', id],
    queryFn: async () => {
      const movieRef = doc(db, 'movies', id);
      const snapshot = await getDoc(movieRef);
      const movie = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      return movie as Movie;
    },
  });
};
