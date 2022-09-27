import React from 'react';

interface PageProps {
  pageName: string;
}

const Page = ({ pageName }: PageProps) => <h1 style={{ margin: '1rem' }}>Demo Page: {pageName}</h1>;

export default Page;
