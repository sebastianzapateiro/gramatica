import React, { useState } from 'react'
import { Textarea } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function TextArea(props) {


    return (
        <>

            <Textarea 
            value={props.valor}
            color="blue.500"
            variant="unstyled"
            colorScheme="blue"
fontSize='25px'
                minH="140px" 
                isDisabled={props.habilitar}
                placeholder={props.placeholder}
                size='sm'
            />
        </>
    )
}

export default TextArea