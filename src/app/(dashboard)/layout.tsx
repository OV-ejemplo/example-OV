'use client';
import { Box, Container } from '@radix-ui/themes';
import { Footer } from '@ov-ejemplo/storybook/components/Footer';
import { Text } from '@ov-ejemplo/storybook/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Buro from '../../../public/image/buro.svg';
import PlanSeguro from '../../../public/image/logo.png';
import './styles.css';

const LayoutExamples = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex h-screen flex-col">
      <header className=" pl-32">
        <div className="flex items-center text-center">
          <Image
            src={PlanSeguro}
            alt={'Logo-plan-seguro'}
            width={200}
            height={200}
          />
          <h1 className="text-gray-light">PAGO EN LINEA</h1>
        </div>
      </header>

      <Box className="bg-svg-pattern flex-1 ">
        <Container className="h-full px-36">{children}</Container>
      </Box>
      <Footer
        className="h-[225px] w-full bg-white "
        items={[
          {
            children: (
              <div className="">
                <Text
                  weight={'medium'}
                  textColor={'gray-light'}
                  className="mb-2"
                >
                  Ubicación
                </Text>

                <Text
                  weight={'bold'}
                  textColor={'gray-medium'}
                  className="mb-2"
                >
                  Artz Pedregal Anillo Perif. 3720,
                  <br />
                  Jardines del Pedregal, Álvaro
                  <br />
                  Obregón, 01900, Torre 2, piso 4 Ciudad
                  <br />
                  de México, CDMX
                </Text>
                <Text weight={'medium'} textColor={'gray-medium'} className="">
                  Centro de atención telefónica{' '}
                </Text>
                <ul className="mt-3 list-disc pl-0 font-bold text-black md:pl-5">
                  <li>800 277 1234 o</li>
                  <li>800 552 727 412 desde el extranjero</li>
                </ul>
              </div>
            ),
          },
          {
            children: (
              <div className="break-words text-black">
                <Text
                  weight={'medium'}
                  textColor={'gray-light'}
                  className="mb-2"
                >
                  Línea UNE - Unidad Epecializada <br /> de Atención a Usuarios
                </Text>

                <Text className="mb-2  font-bold">
                  Consultas y reclamaciones
                </Text>

                <ul className="mb-2 list-disc  pl-0 font-bold md:pl-5">
                  <li>55 4170 9668</li>
                  <li>55 4170 9667</li>
                </ul>

                <Text weight={'bold'} className="mb-2">
                  <Link
                    href="https://www.servicioseguro@planseguro.com.mx"
                    target="_blank"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    servicioseguro@planseguro.com.mx
                  </Link>
                </Text>

                <Link
                  href={
                    'https://www.planseguro.com.mx/docs/formato_queja_une.pdf'
                  }
                  target="_blank"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  <Text className="font-bold">Descargar formato</Text>
                </Link>
              </div>
            ),
          },
          {
            children: (
              <div className="">
                <div className="mb-2 ">
                  <div className="flex lg:justify-center">
                    <Image src={Buro} alt={'Buro'} />
                  </div>
                </div>
                <p className="text-left font-bold text-black lg:text-center">
                  El buró de Entidades Financieras <br />
                  contiene información de Plan <br />
                  Seguro sobre nuestro <br />
                  desempeño frente a Usuarios en <br />
                  la prestación de servicios.
                </p>
              </div>
            ),
          },
          {
            children: (
              <div className="">
                <Text
                  weight={'medium'}
                  textColor={'gray-light'}
                  className="mb-2"
                >
                  CONDUSEF
                </Text>

                <ul className="list-disc pl-0 font-bold text-gray-medium md:pl-5">
                  <li>En la Ciudad de México: (55) 53 40 09 99</li>
                  <li>En el territorio nacional: 800 999 80 80</li>
                  <li>
                    Insurgentes Sur 762, Colonia Del Valle,
                    <br />
                    Delegación Benito Juárez, C.P. 03100,
                    <br />
                    Ciudad de México.
                  </li>
                </ul>

                <Text
                  weight={'bold'}
                  textColor={'gray-medium'}
                  className="mt-4"
                >
                  <Link
                    href="https://www.condusef.gob.mx"
                    target="_blank"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    www.condusef.gob.mx
                  </Link>
                </Text>
              </div>
            ),
          },
        ]}
        copyright={'Plan Seguro © 2024 Todos los derechos reservados.'}
      />
    </div>
  );
};

export default LayoutExamples;
