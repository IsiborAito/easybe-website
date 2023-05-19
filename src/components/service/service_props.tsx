export interface ServiceProps {
  serviceContent: ServiceList[];
}

export interface ServiceList {
  id: number;
  title: string;
  image: string;
  description: string;
}
