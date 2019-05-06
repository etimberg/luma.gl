import React from 'react';
import AnimationLoopRunner from '../../src/components/animation-loop-runner';
import AnimationLoop from '../../../examples/lessons/03/app';

const PATH = 'examples/lessons/03';

export default class Example extends React.Component {
  render() {
    return (
      <AnimationLoopRunner AnimationLoop={AnimationLoop} path={PATH}/>
    );
  }
}