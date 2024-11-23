import { useGetCourses } from "@/modules/core/hooks/useApiHooks";
import { Challenge } from "@/modules/core/interfaces/Shared.interface";
import { useState } from "react";

export function useCourses() {

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [dialogStatus, setDialogStatus] = useState<'challenge' | 'loading' | 'feedback' | 'error'>('challenge')
    const { data: courses } = useGetCourses();

    console.log('courses', courses);
    

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedChallenge(null);
        setDialogStatus('challenge');
    }

    const handleCardClick = (_id: string | number) => {
        setOpenDialog(true);
       // setSelectedChallenge(challenges?.find((challenge) => challenge.id === id) || null);
    }

    const handleRetry = () => {
        setDialogStatus('challenge');
        setOpenDialog(true);
    }

    return {
        openDialog,
        selectedChallenge,
        dialogStatus,
        courses,
        handleCloseDialog,
        handleCardClick,
        handleRetry,
    };
}
