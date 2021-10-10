import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";

function AnimatedTree() {
    const clr = useColorModeValue('#000', '#FFF');
    const clrNode = useColorModeValue('#240950', '#1EC0B8');
    return (
        <div className='ml-36'>
            <motion.svg
                animate={{ y: [-1000, 0], opacity: [0, 1] }}
                width='402'
                height='233'
                viewBox='0 0 402 233'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 1 }}
                    x1='120.405'
                    y1='82.1962'
                    x2='170.405'
                    y2='45.1962'
                    stroke='#DD3142'
                    stroke-width='2'
                />
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 2 }}
                    x1='105.771'
                    y1='135.363'
                    x2='138.247'
                    y2='174.702'
                    stroke={clr}
                    stroke-opacity='0.25'
                    stroke-width='2'
                />
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 3.7 }}
                    x1='329.771'
                    y1='135.363'
                    x2='362.247'
                    y2='174.702'
                    stroke='#DD3142'
                    stroke-width='2'
                />
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 3 }}
                    x1='236.595'
                    y1='45.1962'
                    x2='286.595'
                    y2='82.1962'
                    stroke={clr}
                    stroke-opacity='0.25'
                    stroke-width='2'
                />
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 2 }}
                    x1='31.2601'
                    y1='177.327'
                    x2='71.2601'
                    y2='133.327'
                    stroke={clr}
                    stroke-opacity='0.25'
                    stroke-width='2'
                />
                <motion.line
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 3.7 }}
                    x1='260.188'
                    y1='174.417'
                    x2='288.188'
                    y2='135.417'
                    stroke={clr}
                    stroke-opacity='0.25'
                    stroke-width='2'
                />
                <motion.path
                    id='root'
                    d='M226 25C226 38.8071 214.807 50 201 50C187.193 50 176 38.8071 176 25C176 11.1929 187.193 0 201 0C214.807 0 226 11.1929 226 25Z'
                    fill={clrNode}
                />
                <motion.path
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 1.5 }}
                    id='left'
                    d='M116 107C116 120.807 104.807 132 91 132C77.1929 132 66 120.807 66 107C66 93.1929 77.1929 82 91 82C104.807 82 116 93.1929 116 107Z'
                    fill={clrNode}
                />
                <motion.path
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 3.5 }}
                    id='right'
                    d='M333 107C333 120.807 321.807 132 308 132C294.193 132 283 120.807 283 107C283 93.1929 294.193 82 308 82C321.807 82 333 93.1929 333 107Z'
                    fill={clrNode}
                />
                <motion.path
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 4.5 }}
                    id='right-right'
                    d='M401.928 207.377C401.928 221.184 390.736 232.377 376.928 232.377C363.121 232.377 351.928 221.184 351.928 207.377C351.928 193.57 363.121 182.377 376.928 182.377C390.736 182.377 401.928 193.57 401.928 207.377Z'
                    fill={clrNode}
                />
                <motion.path
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 2.9 }}
                    id='left-right'
                    d='M175 208C175 221.807 163.807 233 150 233C136.193 233 125 221.807 125 208C125 194.193 136.193 183 150 183C163.807 183 175 194.193 175 208Z'
                    fill='#DD3142'
                />
                <motion.path
                    animate={{ opacity: [0, 1], strokeDasharray: [16, 98] }}
                    transition={{ delay: 4.2 }}
                    id='right-left'
                    d='M282 208C282 221.807 270.807 233 257 233C243.193 233 232 221.807 232 208C232 194.193 243.193 183 257 183C270.807 183 282 194.193 282 208Z'
                    fill={clrNode}
                />
                <motion.path
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 2.5 }}
                    id='left-left'
                    d='M50 208C50 221.807 38.8071 233 25 233C11.1929 233 0 221.807 0 208C0 194.193 11.1929 183 25 183C38.8071 183 50 194.193 50 208Z'
                    fill={clrNode}
                />
            </motion.svg>
        </div>
    );
}

export default AnimatedTree;
