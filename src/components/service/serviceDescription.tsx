import React from 'react';
import Service from './service';

function ServiceDescription() {
  const SERVICES = [
    {
      id: 1,
      title: 'Custom Software Development',
      image: 'image 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    },
    {
      id: 2,
      title: 'Custom Web Development',
      image: 'image 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    },
    {
      id: 3,
      title: 'Custom Mobile Development',
      image: 'image 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    },
    {
      id: 4,
      title: 'Custom Solution Development',
      image: 'image 4',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    },
    {
      id: 5,
      title: 'Custom Database structuring',
      image: 'image 5',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    },
    {
      id: 6,
      title: 'Custom WebApp Development',
      image: 'image 6',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. Hendrerit mauris facilisi dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus lectus malesuada blandit enim tellus nulla adipiscing pulvinar.'
    }
  ];

  return <Service serviceContent={SERVICES} />;
}

export default ServiceDescription;
