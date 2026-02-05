import { useNavigate, useLocation } from 'react-router-dom';
import { useUIStore } from '../Store/useUIStore';

export const useScrollOrNavigate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const setModalOpen = useUIStore((state) => state.setModalOpen);

    const handleNavigation = (target: string, isHash: boolean = false) => {
        if (target === 'contact-modal') {
            setModalOpen(true);
            return;
        }

        if (isHash) {
            if (location.pathname !== '/') {
                navigate(`/${target}`);
            } else {
                const element = document.getElementById(target.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            navigate(target);
        }
    };

    return handleNavigation;
};
