import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Badge, Box } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getAllQuestions } from '../../Actions/Question/getAllQuestions'
import { DashboardSkeleton } from '../../Utilities/Skeletons'

const Dashboard = () => {
    const storedState = useSelector(state => state);

    const [problemList, setProblemList] = useState(storedState.questions);
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
        let easyQuestions = problemList.filter((prblm) => {
            return prblm.tag === 'easy'
        });
        let mediumQuestions = problemList.filter((prblm) => {
            return prblm.tag === 'medium'
        });
        let hardQuestions = problemList.filter((prblm) => {
            return prblm.tag === 'hard'
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
    const dispatch = useDispatch();
    useEffect(() => {
        if (problemList?.length === 0) {
            dispatch(getAllQuestions());
            setProblemList(storedState.questions);
        }
        if (storedState?.gameInfo !== null || sessionStorage.getItem('gameInfo')) {
            let gameId = storedState?.gameInfo?.gameId || JSON.parse(sessionStorage.getItem('gameInfo'))?.gameId;
            // history.push('/game/' + gameId);
        }
    }, []);

    return (

        <Box w="70%" mx="auto" mt="20" pb="40">
            {storedState?.questions?.length == 0 ? <DashboardSkeleton /> : <Table colorScheme="linkedin">
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
                        storedState?.questions?.map((problem, idx) => {
                            return <Tr style={{ cursor: 'pointer' }} key={problem.id} onClick={() => handleRoute(problem.id)}>
                                <Td>{idx + 1}</Td>
                                <Td>{problem.queName}</Td>
                                <Td>{<Badge colorScheme={problem.tag === 'easy' ? 'whatsapp' : problem.difficulty === 'hard' ? 'red' : 'orange'}>{problem.tag}</Badge>}</Td>
                                <Td>{problem.submission}</Td>
                            </Tr>
                        })
                    }
                </Tbody>

            </Table>}

        </Box>
    )
}

export default Dashboard
