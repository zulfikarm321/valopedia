import MapsList from './MapsList';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

const fetchMaps = async () => {
    const res = await fetch('https://valorant-api.com/v1/maps');
    return res.json();
};

async function Maps() {
    const { data } = await fetchMaps();

    return (
        <Suspense fallback={<Loading text="Loading Maps..." />}>
            <MapsList maps={data} />
        </Suspense>
    );
}

export default Maps;
