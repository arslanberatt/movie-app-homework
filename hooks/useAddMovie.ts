import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';
import { Movie } from '../app/types/types';

export const useAddMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (movie: Omit<Movie, 'id'>) => {
      const movieRef = collection(db, 'movies');
      await addDoc(movieRef, movie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};
