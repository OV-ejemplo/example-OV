import { Button } from '@ov-ejemplo/storybook/components/Button';

import {
  Card,
  CardContent,
  CardHeader,
} from '@ov-ejemplo/storybook/components/Card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ov-ejemplo/storybook/components/Select';
import { Text } from '@ov-ejemplo/storybook/components/Text';
import { ArrowRightIcon, InfoIcon } from 'lucide-react';
import React from 'react';

const Examples = () => {
  return (
    <div className="flex flex-col gap-5 px-28">
      <Text className="text-3xl font-extrabold text-brand-blue">
        Ingreso de trámites
      </Text>

      <Card rounded={'xxl'} className="h-80 bg-white">
        <CardHeader>
          <Text className="px-3 text-2xl font-medium text-brand-blue">
            Nuevo trámite
          </Text>
        </CardHeader>

        <CardContent className="h-full">
          <div className="flex h-1/2 flex-col ">
            <Text className=" py-3 pl-12 text-brand-blue">
              Selecciona un trámite
            </Text>
            <div className="flex items-center justify-center gap-5">
              <InfoIcon size={30} className="text-actions-primary" />

              <Select>
                <SelectTrigger className="w-full text-gray-light">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="text-gray-light">
                  <SelectGroup className="">
                    <SelectItem
                      className="focus:text-gray-light"
                      value="cliente"
                    >
                      Trámite Cliente (Agente / Promotor)
                    </SelectItem>
                    <SelectItem className="focus:text-gray-light" value="user">
                      Trámite Usuario (Asegurado)
                    </SelectItem>
                    <SelectItem
                      className="focus:text-gray-light"
                      value="collaborator"
                    >
                      Trámite Colaborador (Directivo / Representante Legal /
                      Empleado)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className=" h-1/2 ">
            <Text textColor="gray-light">
              Consulta las reglas de negocio y requisitos de tus trámites
            </Text>
            <div className="py-4">
              <Button size="lg" variant="outline">
                <Text className="flex text-actions-primary">
                  Guia de Apoyo <ArrowRightIcon size={25} className="mx-2" />
                </Text>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Examples;
