import React from 'react';

interface DemoPageProps {
  pageName: string;
}

const DemoPage = ({ pageName }: DemoPageProps) => <h1 style={{ margin: '1rem' }}>Demo Page: {pageName}</h1>;

export default DemoPage;
