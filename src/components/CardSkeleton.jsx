import Skeleton from "react-loading-skeleton"

export const CardSkeleton = ({ className = '' }) => {
    return (<Skeleton className={`rounded-lg ${className}`} baseColor="#090E1A" highlightColor="#0C1322" />)
}
