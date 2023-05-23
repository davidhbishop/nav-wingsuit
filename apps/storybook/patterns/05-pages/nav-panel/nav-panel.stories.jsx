import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import React from 'react';
import 'atoms/hamburger';
import 'molecules/card';
import 'atoms/button';
import 'molecules/hero';
import 'atoms/image';
import 'organisms/header';
import 'organisms/footer';

export default {
  title: 'Pages/Nav Station',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./nav-panel.twig');

export const forecast = () => {
  return <RenderTwig data={template}></RenderTwig>;
};
