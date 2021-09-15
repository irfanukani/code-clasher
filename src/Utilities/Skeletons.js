import { Stack } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/skeleton"

export const DashboardSkeleton = () => {
    const problemList = [{}, {}, {}, {}, {}, {}]
    return <Stack>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>
        <Skeleton height="42px"></Skeleton>

    </Stack>
}