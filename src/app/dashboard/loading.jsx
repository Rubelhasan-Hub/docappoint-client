import { Spinner } from '@heroui/react';


const loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading.......</span>
            </div>
        </div>
    );
};

export default loading;
