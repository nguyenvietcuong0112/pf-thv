import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUIStore } from '../Store/useUIStore';

export const useRouteLoading = () => {
    const location = useLocation();
    const setRouteLoading = useUIStore((state) => state.setRouteLoading);

    useEffect(() => {
        setRouteLoading(true);
        const timer = setTimeout(() => {
            setRouteLoading(false);
        }, 500); // Simulate loading delay for smooth transitions

        return () => clearTimeout(timer);
    }, [location.pathname, setRouteLoading]);
};
