import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Badge, Box } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { DashboardSkeleton } from '../../Utilities/Skeletons'

const Dashboard = () => {

    const dummy = [{
        id: 1,
        questionName: 'Chef and the array',
        solvedBy: 167,
        difficulty: 'easy',

    },
    {
        id: 2,
        questionName: 'Alice and Bob',
        solvedBy: 67,
        difficulty: 'medium',

    }, {
        id: 3,
        questionName: 'Alice and Bob',
        solvedBy: 1967,
        difficulty: 'hard',

    }, {
        id: 4,
        questionName: 'Alice and Bob',
        solvedBy: 1467,
        difficulty: 'medium',

    }, {
        id: 5,
        questionName: 'Alice and Bob',
        solvedBy: 1667,
        difficulty: 'easy',

    }]
    const [problemList, setProblemList] = useState(dummy);
    const [sortedByDifficulty, setSortedByDifficulty] = useState(false);
    const [sortedByPeople, setSortedByPeople] = useState(false);
    async function sortByDifficulty() {

        if (sortedByDifficulty) {
            setSortedByDifficulty(!sortedByDifficulty);
            setProblemList(problemList.reverse());
            return;
        }
        setSortedByDifficulty(!sortedByDifficulty);
        let ModifiedList = [];
        let easyQuestions = dummy.filter((prblm) => {
            return prblm.difficulty === 'easy'
        });
        let mediumQuestions = dummy.filter((prblm) => {
            return prblm.difficulty === 'medium'
        });
        let hardQuestions = dummy.filter((prblm) => {
            return prblm.difficulty === 'hard'
        });
        await easyQuestions.map((prb) => {
            ModifiedList.push(prb);
        })
        await mediumQuestions.map((prb) => {
            ModifiedList.push(prb);
        })
        await hardQuestions.map((prb) => {
            ModifiedList.push(prb);
        })
        setProblemList(ModifiedList);
    }

    async function sortByPeople() {
        setSortedByPeople(!sortedByPeople);
        let list = await problemList.sort((a, b) => { return sortedByPeople ? a.solvedBy - b.solvedBy : b.solvedBy - a.solvedBy });
        setProblemList([]);
        setProblemList(list);
    }
    const history = useHistory();
    const handleRoute = (id) => {
        return history.push(`/problem/${id}`);
    }

    return (

        <Box w="70%" mx="auto" mt="20" pb="40">
            {problemList.length == 0 && <DashboardSkeleton />}
            <Table colorScheme="linkedin">
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Question</Th>
                        <Th style={{ cursor: 'pointer' }} onClick={sortByDifficulty}>Difficulty{sortedByDifficulty ? <ArrowDownIcon /> : <ArrowUpIcon />}</Th>
                        <Th style={{ cursor: 'pointer' }} onClick={() => sortByPeople()}>Solved By {sortedByPeople ? <ArrowDownIcon /> : <ArrowUpIcon />}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        problemList.map((problem, idx) => {
                            return <Tr style={{ cursor: 'pointer' }} key={problem.id} onClick={() => handleRoute(problem.id)}>
                                <Td>{idx + 1}</Td>
                                <Td>{problem.questionName}</Td>
                                <Td>{<Badge colorScheme={problem.difficulty === 'easy' ? 'whatsapp' : problem.difficulty === 'hard' ? 'red' : 'orange'}>{problem.difficulty}</Badge>}</Td>
                                <Td>{problem.solvedBy}</Td>
                            </Tr>
                        })
                    }
                </Tbody>

            </Table>
        </Box>
    )
}

export default Dashboard
