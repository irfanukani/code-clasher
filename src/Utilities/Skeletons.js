import { Stack } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/skeleton"

import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'

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