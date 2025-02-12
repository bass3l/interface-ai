import * as React from 'react';

export const Index = [
  {
    name: 'hello-world',
    component: React.lazy(() => import('@/registry/hello-world/hello-world')),
  },
  {
    name: 'example-form',
    component: React.lazy(() => import('@/registry/example-form/example-form')),
  },
  {
    name: 'complex-component',
    component: React.lazy(() => import('@/registry/complex-component/page')),
  },
];
