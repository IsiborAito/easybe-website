import React from 'react';
import Template, { ITemplate } from './template';

interface IService {
  service: ITemplate;
}

const Service = ({ service }: IService) => {
  return (
    <Template
      firstTitle={service.firstTitle}
      firstDesc={service.firstDesc}
      secondTitle={service.secondTitle}
      secondDesc={service.secondDesc}
      thirdTitle={service.thirdTitle}
      thirdDesc={service.thirdDesc}
    />
  );
};

export default Service;
