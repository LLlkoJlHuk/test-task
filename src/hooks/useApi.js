import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useApi(url, options = {}) {
    const { data, isLoading, error } = useQuery({
        queryKey: [url, options],
        queryFn: async () => {
            const response = await axios.get(url, options);
            return response.data;
        },
        select: (data) =>
            [...data].sort((a, b) => (a.size ?? 0) - (b.size ?? 0)),
        staleTime: 5 * 60 * 1000,
    });

    return {
        cards: data || [],
        loading: isLoading,
        error,
    };
}
