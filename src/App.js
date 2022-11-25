import { Box, Container, Textarea } from '@chakra-ui/react'
import TextArea from './Componentes/TextArea';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
import { gramatica } from './Algoritmo/gramatica';


function App() {


  let [value, setValue] = useState('');
  let [traduccion, setTraduccion] = useState('');
  let [verificacion, setVerificacion] = useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue);

    let resultado = gramatica(inputValue);
    console.log("Valor resuelto y value",resultado,value);
    setVerificacion(resultado);
    console.log('Traduccion',verificacion)
  }

  return (
    <Container mt="3%" maxW='98%'>
      <Flex minWidth='max-content'>
        <Box flex='1' >
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>INGLÉS</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Textarea value={value}
                  onChange={handleInputChange}
                  fontSize='17px'
                  minH="140px"
                  size='sm'
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box flex='1' >
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>RESULTADO</Tab>
              <Tab>ESPAÑOL</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TextArea valor={verificacion} habilitar={false} placeholder="Validación de frase" />
              </TabPanel>
              <TabPanel>
                <TextArea valor='asdasd' habilitar={false} placeholder="" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
