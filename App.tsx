import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import IDE from './IDE';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    // This component will be unmounted after the animation, so no need for complex state management
    // The parent controls the visibility.
  };

  // A handler to set `hasEntered` after the fade-out animation completes
  const onAnimationEnd = () => {
     if (!hasEntered) {
        setHasEntered(true);
     }
  };


  return (
    <>
      {!hasEntered && <LandingPage onEnter={() => setHasEntered(true)} />}
      {hasEntered && <IDE />}
    </>
  );
};

export default App;
